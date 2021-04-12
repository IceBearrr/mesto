import './index.css';

import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import {//initialCards,
    formElementEdit, formElementAdd, addButton, editButton, deletePopup, openAvatar} from '../utils/constants.js';
import Popup from '../components/Popup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';

import Api from '../components/Api.js';


const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-42',
    headers: {
        authorization: '31859db2-75be-407c-8c24-8ed9ee09fde1',
        'Content-Type': 'application/json'
    }
});

const profile = document.querySelector('.profile');
const profile__name = profile.querySelector('.profile__name');
const profile__about = profile.querySelector('.profile__description');
const profile__img = profile.querySelector('.profile__image');
let my_id;


function afterGetUser(my_id) { // если смогли выполнить первый запрос к апи и получить инфо об авторе то запускаем второй запрос и получаем карточки
    window.my_id = my_id; // сделаем свой айди глобальной переменноый
    api.getInitialCards()
        .then((result) => {
            // обрабатываем результат
            cardList.renderItems(result)

        })
        .catch((err) => {
            console.log(err); // выведем ошибку в консоль
        })
}


//заполняем шапку профиля, первый запрос  на получение инфо  о пользователе
api.getUserInfo()
    .then((result) => {
        // обрабатываем результат
        profile__name.textContent = result.name;
        console.log("name user" + result.name);
        profile__about.textContent = result.about;
        console.log("name about" + result.about);
        profile__img.src = result.avatar;
        console.log("name avatar" + result.avatar);
        console.log("name id " + result._id);
        my_id = result._id; //мой айди6 айли юзера

        const userInfo = new UserInfo();

        return my_id;


        //cardList.renderItems(result)

    })

    .then((my_id) => { // если первый запрос выполнился то делаем второй запрос на получении карточек
        afterGetUser(my_id);
    })

    .catch((err) => {
        console.log(err); // выведем ошибку в консоль
    })


//console.log("initialCards[0].name" + data);

const popup_tag = '.popup_img';

const propertiesValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button-inactive',
    deactiveButtonClass: 'popup__button-deactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}

const cardValidationEdit = new FormValidator(formElementEdit, propertiesValidation);
cardValidationEdit.enableValidation();


const cardValidationAdd = new FormValidator(formElementAdd, propertiesValidation);
cardValidationAdd.enableValidation();


const openImg = new PopupWithImage(popup_tag);
const openCardDelete = new Popup(deletePopup);


function createCard(item) {
    const card = new Card({
        id: item._id,
        name: item.name,
        link: item.link,
        likes: item.likes ? item.likes : [],

        my_id: window.my_id,
        //iLiked: item.likes.includes(window.my_id), // есть ли я в списке дайкнувших?
        //sum_like: item.likes ? item.likes.length: 0,
        own: item.owner ? item.owner._id === my_id : "", //если есть хозяин карточки, то кто он?
        api: api,
        cardSelector: ".template",
        handleCardClick: () => {
            openImg.open(item.name, item.link)
        },
        openCardDelete: openCardDelete
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

//Добавление карточки
const popudAAd = new PopupWithForm({
    popupSelector: ".popup_add",
    handleFormSubmit: (item) => {
        cardList.renderItems([{
            name: item.name,
            link: item.foto
        }]);
        api.putNewCard(item.name, item.foto)
    }
});
addButton.addEventListener('click', function () {
    cardValidationAdd.disableSubmitButton(propertiesValidation);
    popudAAd.open()
});

//Данные профиля

const formAutor = new PopupWithForm({
    popupSelector: '.popup_edit',
    handleFormSubmit: (item) => {
        userInfo.setUserInfo(item.name, item.description);
        api.updateProfile(item.name, item.description);
    }
});

editButton.addEventListener('click', function () {
    formAutor.open()
});

const formAvatar = new PopupWithForm({
    popupSelector: '.popup_avatar',
    handleFormSubmit: (item) => {
        // userInfo.setUserInfo(item.name, item.description);
        // api.updateProfile(item.name, item.description);
    }
});


openAvatar.addEventListener('click', function () {
    formAvatar.open()
});


