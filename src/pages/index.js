import './index.css'; // добавьте импорт главного файла стилей


import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import {initialCards, formElementEdit, formElementAdd, elementCell, addButton, editButton} from '../utils/constants.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';

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
cardValidationAdd.disableSubmitButton(propertiesValidation);

const openImg = new PopupWithImage(popup_tag);


function createCard(item) {
    const card = new Card({
        name: item.name,
        link: item.link,
        cardSelector: ".template",
        handleCardClick: () => {
            openImg.open(item.name, item.link)
        }
    });
    //const section = new Section({item, renderer}, "elementCell")
    //const section = new Section({item}, "elementCell",elements__cell)
    const cardElement = card.generateCard();
    //section.addItem(cardElement);
    //elementCell.append(cardElement);
    return cardElement;
}

//Добавление карточек при загрузке страницы
const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        //const openImg = new PopupWithImage(item.name, item.link, popup_tag);
        return createCard(item);
    },
    containerSelector: '.elements__cell'
});


cardList.renderItems();


//Добавление карточки
const popudAAd = new PopupWithForm({
    popupSelector: ".popup_add",
    handleFormSubmit: (item) => {
        const card = new Card({
            name: item.name,
            link: item.foto,
            cardSelector: ".template",
            handleCardClick: () => {
                openImg.open(item.name, item.foto)
            }
        });
        const cardElement = card.generateCard();
        elementCell.prepend(cardElement);
    }
});
addButton.addEventListener('click', function () {
    popudAAd.open()
});


//
// const popudAAd = new PopupWithForm({
//     popupSelector: ".popup_add",
//     handleFormSubmit: (item) => {
//         createCard(item)
//     },
// });
// addButton.addEventListener('click', function () {
//     popudAAd.open()
// });

//Данные профиля
const card = new UserInfo();

const formAutor = new PopupWithForm({
    popupSelector: '.popup_edit',
    handleFormSubmit: (item) => {
        card.setUserInfo(item.name, item.description);
    }
});

formAutor.setEventListeners();

editButton.addEventListener('click', function () {
    formAutor.open()
});