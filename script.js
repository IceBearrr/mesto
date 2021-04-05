import Card from './components/Card.js';
import UserInfo from './components/UserInfo.js';
import Section from './components/Section.js';
import FormValidator from './components/FormValidator.js';
import {initialCards, formElementEdit, formElementAdd, elementCell, addButton, editButton} from './utils/constants.js';
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithImage from './components/PopupWithImage.js';

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

//Добавление карточек при загрузке страницы
const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        const openImg = new PopupWithImage(item.name, item.link, popup_tag);
        const card = new Card(item.name, item.link, ".template", () => openImg.open());
        const cardElement = card.generateCard();
        elementCell.append(cardElement);
    }
}, popup_tag);

// отрисовка карточек
cardList.renderItems();

//Добавление карточки
const popudAAd = new PopupWithForm({
    popupSelector: ".popup_add",
    handleFormSubmit: (item) => {
        console.log("item" + item.foto);
        const card = new Card(item.name, item.foto, ".template", () => openImg.open());
        const cardElement = card.generateCard();
        elementCell.prepend(cardElement);
    }
});
addButton.addEventListener('click', function () {
    popudAAd.open()
});

//Данные профиля
const formAutor = new PopupWithForm({
    popupSelector: '.popup_edit',
    handleFormSubmit: (item) => {
        console.log("item" + item.name, item.description);
        const card = new UserInfo({nameInputSelector: item.name, jobInputSelector: item.description});
        card.setUserInfo();
    }
});

formAutor.setEventListeners();

editButton.addEventListener('click', function () {
    formAutor.open()
});