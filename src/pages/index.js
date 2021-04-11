import './index.css';

import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import {initialCards, formElementEdit, formElementAdd, addButton, editButton, deletePopup} from '../utils/constants.js';
import Popup from '../components/Popup.js';
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


const openImg = new PopupWithImage(popup_tag);
const openCardDelete = new Popup(deletePopup);


function createCard(item) {
    const card = new Card({
        name: item.name,
        link: item.link,
        cardSelector: ".template",
        handleCardClick: () => {
            openImg.open(item.name, item.link)
        },
        handleDeleteCard: () => {
            openCardDelete.open(item.name, item.link)
        }
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

cardList.renderItems(initialCards);

//Добавление карточки
const popudAAd = new PopupWithForm({
    popupSelector: ".popup_add",
    handleFormSubmit: (item) => {
        cardList.renderItems([{
            name: item.name,
            link: item.foto
        }]);

    }
});
addButton.addEventListener('click', function () {
    cardValidationAdd.disableSubmitButton(propertiesValidation);
    popudAAd.open()
});

//Данные профиля
const userInfo = new UserInfo();

const formAutor = new PopupWithForm({
    popupSelector: '.popup_edit',
    handleFormSubmit: (item) => {
        userInfo.setUserInfo(item.name, item.description);
    }
});


editButton.addEventListener('click', function () {
    formAutor.open()
});



// //Счетчик лайков
// const likeBtn = document.querySelectorAll('.element__like-btn');
// let likeCount = document.querySelector('.element__like-sum').innerHTML;


// likeBtn.addEventListener('click', () => {
//     if(likeBtn.classList.contains('liked')){
//         likeBtn.classList.remove('liked');
//         likeCount -= 1;
//     }
//     else {
//         likeCount += 1;
//         likeBtn.classList.add('liked');
//     }
//     document.querySelector('.element__like-sum').innerHTML = likeCount;
// });




