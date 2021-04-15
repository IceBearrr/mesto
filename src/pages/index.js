import './index.css';

import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import {
    buttonElementSave,
    headers,
    baseUrl,
    profile,
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
import PopupAvatar from '../components/PopupAvatar.js';

import Api from '../components/Api.js';


const api = new Api({
    baseUrl: baseUrl,
    headers: headers
});

let my_id;
window.my_id = my_id; // сделаем свой айди глобальной переменноый


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
        my_id = result._id; //мой айди6 айли юзера
        window.my_id = my_id;
        return my_id;

    })

    .then((my_id) => { // если первый запрос выполнился то делаем второй запрос на получении карточек
        afterGetUser(my_id);
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

        my_id: window.my_id,
        //iLiked: item.likes.includes(window.my_id), // есть ли я в списке лайкнувших?
        //sum_like: item.likes ? item.likes.length: 0,
        own: item.owner ? item.owner._id === my_id : true, //если есть хозяин карточки, то кто он? намудрил что-то я, если есть поле
        // item.owner то возвращаем результат сравнения item.owner._id === my_id  или тру, если нет, так
        api: api,
        cardSelector: ".template",
        handleCardClick: () => {
            openImg.open(item.name, item.link)
        },
        openCardDelete: openCardDelete,
        handleFormUpdate: afterGetUser

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
        //api.putNewCard(item)

    },
    handleFormUpdate: newCard
});
addButton.addEventListener('click', function () {
    cardValidationAdd.disableSubmitButton(propertiesValidation);
    popudAAd.open()
});

//Данные профиля


const userInfo = new UserInfo(profileNameUser, profileNameTemplate, profileDescriptionUser, profileDescriptionTemplate);


const userUpdateDom = (item) => {
    userInfo.setUserInfo(item.name, item.description);
}

const formAutor = new PopupWithForm({
    popupSelector: '.popup_edit',
    handleFormSubmit: (item) => {
        //userInfo.setUserInfo(item.name, item.description);
        api.updateProfile(item.name, item.description, item.close, item.update);
    },
    handleFormUpdate: userUpdateDom

});

editButton.addEventListener('click', function () {

    userInfo.getUserInfo();
    formAutor.open()
});

// const formAvatar = new PopupAvatar({
//     popupSelector: '.popup_avatar',
//     handleFormSubmit: (item) => {
//         api.updateProfilePic(item)
//     },

// });

const formAvatar = new PopupWithForm({
    popupSelector: '.popup_avatar',
    handleFormSubmit: (item) => {
        //userInfo.setUserInfo(item.name, item.description, item.avatar);
        api.updateProfilePic(item)
    },
    handleFormUpdate: userInfo.setUserInfo


});

openAvatar.addEventListener('click', function () {
    //  cardValidationAvatar.disableSubmitButton(propertiesValidation);
    formAvatar.open()
});
