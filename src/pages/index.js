import './index.css';

import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import {
    openAvatarTag,
    buttonElementSave,
    headers,
    baseUrl,
    profileName,
    profileAbout,
    profileImg,
    propertiesValidation,
    popupTag,
    formElementEdit,
    formElementAdd,
    addButton,
    editButton,
    deletePopup,
    openAvatar,
    formElementAvatar,
    profileNameUser,
    profileNameTemplate, profileDescriptionUser, profileDescriptionTemplate
} from '../utils/constants.js';
import PopupDelete from '../components/PopupDelete.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';

import Api from '../components/Api.js';


const api = new Api({
    baseUrl: baseUrl,
    headers: headers
});

let myId;
window.myId = myId; // сделаем свой айди глобальной переменноый


const afterGetUser = () => { // если смогли выполнить первый запрос к апи и получить инфо об авторе то запускаем второй запрос и получаем карточки

    api.getInitialCards()
        .then((result) => {
            // обрабатываем результат
            cardList.renderItems(result);
        })
        .catch((err) => {
            console.log(err); // выведем ошибку в консоль
        })
}


//заполняем шапку профиля, первый запрос  на получение инфо  о пользователе
api.getUserInfo()
    .then((result) => {
        // обрабатываем результат
        profileName.textContent = result.name;
        profileAbout.textContent = result.about;
        profileImg.src = result.avatar;
        myId = result._id; //мой айди6 айли юзера
        window.myId = myId;
        return myId;
    })

    .then((myId) => { // если первый запрос выполнился то делаем второй запрос на получении карточек
        afterGetUser(myId);
    })

    .catch((err) => {
        console.log(err); // выведем ошибку в консоль
    })


const cardValidationEdit = new FormValidator(formElementEdit, propertiesValidation, buttonElementSave);
cardValidationEdit.enableValidation();


const cardValidationAdd = new FormValidator(formElementAdd, propertiesValidation, buttonElementSave);
cardValidationAdd.enableValidation();

const cardValidationAvatar = new FormValidator(formElementAvatar, propertiesValidation, buttonElementSave);
cardValidationAvatar.enableValidation();


const openImg = new PopupWithImage(popupTag);
const openCardDelete = new PopupDelete(deletePopup);


function createCard(item) {
    const card = new Card({
        _id: item._id,
        name: item.name,
        link: item.link,
        likes: item.likes ? item.likes : [],

        myId: window.myId,
        //iLiked: item.likes.includes(window.myId), // есть ли я в списке лайкнувших?
        //sumLike: item.likes ? item.likes.length: 0,
        own: item.owner ? item.owner._id === myId : true, //если есть хозяин карточки, то кто он? намудрил что-то я, если есть поле
        // item.owner то возвращаем результат сравнения item.owner._id === myId  или тру, если нет, так
        api: api,
        cardSelector: ".template",
        handleCardClick: () => {
            openImg.open(item.name, item.link)
        },
        openCardDelete: openCardDelete,

    });

    const cardElement = card.generateCard();
    return cardElement;
}

//Добавление карточек при загрузке страницы

const cardList = new Section({
    renderer: (item) => {
        return createCard(item);
    },
    containerSelector: '.elements__cell'
});

//cardList.renderItems(initialCards); ждем ответ апи


const newCard = (item) => {
    cardList.renderItems([{ //будем перестраивать все а не добавлять по одной
        _id: item._id,
        name: item.name,
        link: item.link
    }])
}

//Добавление карточки
const popudAAd = new PopupWithForm({
    popupSelector: ".popup_add",
    handleFormSubmit: (item) => {
        console.log("item.update" + item.update);
        api.putNewCard(item.name, item.foto, item.close, item.update)
    },
    handleFormUpdate: newCard
});
addButton.addEventListener('click', function () {
    cardValidationAdd.disableSubmitButton(propertiesValidation);
    popudAAd.open()
});

//Данные профиля


const userInfo = new UserInfo(profileNameUser, profileNameTemplate, profileDescriptionUser, profileDescriptionTemplate, openAvatarTag);

const userUpdateDom = (item) => {
    userInfo.setUserInfo(item.name, item.description);
    }

const formAutor = new PopupWithForm({
    popupSelector: '.popup_edit',
    handleFormSubmit: (item) => {
        api.updateProfile(item.name, item.description, item.close, item.update);
    },
    handleFormUpdate: userUpdateDom

});

editButton.addEventListener('click', function () {
    cardValidationEdit.disableSubmitButton(propertiesValidation);
    formAutor.open(    userInfo.getUserInfo())
});

const userUpdateAvatarDom = (item) => {
    userInfo.setNewAva(item.foto);
}


const formAvatar = new PopupWithForm({
    popupSelector: '.popup_avatar',
    handleFormSubmit: (item) => {
        api.updateProfilePic(item.foto, item.close, item.update)
    },
    handleFormUpdate: userUpdateAvatarDom
});

openAvatar.addEventListener('click', function () {
    cardValidationAvatar.disableSubmitButton(propertiesValidation);
    formAvatar.open(    userInfo.getUserInfo())
});
