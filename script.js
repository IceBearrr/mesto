import Card from './components/Card.js';

import Section from './components/Section.js';
import FormValidator from './components/FormValidator.js';
//import Popup from './Popup.js';
import {initialCards, picPopup, formElementEdit, formElementAdd} from './utils/constants.js';
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithImage from './components/PopupWithImage.js';
import Popup from './components/Popup.js';

const elementCell = document.querySelector('.elements__cell');


//picPopup = '.popup_img';
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


const popupEdit = document.querySelector('.popup_edit');
const formEdit = popupEdit.querySelector('.popup__container');
const popupName = popupEdit.querySelector('.popup__input_enter_name');
const popupJob = popupEdit.querySelector('.popup__input_enter_description');

//Добавление карточек при загрузке страницы
const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        const openImg = new PopupWithImage(item.name, item.link, popup_tag)
        const card = new Card(item.name, item.link, ".template", () => openImg.open());
        const cardElement = card.generateCard();
        elementCell.append(cardElement);

        //cardList.addItem(cardElement); Белый тут что - то ломается
        console.log("топ " + cardElement);

    }}, popup_tag);

// отрисовка карточек
cardList.renderItems();
console.log("топ топ топ рисуем")


// // инициализация формы Это что за покемон?!
// const formRenderer = new Section({
//     data: []
//   }, formSection);
//
//   const formElement = form.generateForm();
//
//   formRenderer.setItem(formElement);

//Данные профиля
const formAutor = new PopupWithForm(popupName,
    {handleFormSubmit: () => {
        const card = new UserInfo(popupName, popupJob);
          card.setUserInfo();
        const popup = new Popup(popupEdit);
        popup.close();
        }
    })


    // const form = new SubmitForm({ Это что за покемон?!
    //     formSelector: '.popup__container_edit',
    //     handleFormSubmit: () => {
    //       const card = new UserInfo(popupName, popupJob);
    //       card.setUserInfo();
    //       const cardElement = card.generateCard();
    //
    //       cardsList.addItem(cardElement);
    //     }
    //   });











// initialCards.forEach((item) => {
//     // Создадим экземпляр карточки
//     const card = new Card(item.name, item.link, ".template");
//     // Создаём карточку и возвращаем наружу
//     const cardElement = card.generateCard();
//     // Добавляем в DOM
//     elementCell.append(cardElement);
// });


// editButton.addEventListener('click', function () {
//     openPopup(popupEdit)
// });

// popupEditClose.addEventListener('click', function () {
//     closePopup(popupEdit)
// });

// function saveEditPopup(evt) {
//     evt.preventDefault();
//     profileName.textContent = nameInput.value;
//     profileDescription.textContent = jobInput.value;
//     closePopup(popupEdit);
// }

// formUser.addEventListener('submit', saveEditPopup);






// //функция добавления карточки
// function addNewElement(evt) {
    
// }


// formUserNew.addEventListener('submit', addNewElement);


// addButton.addEventListener('click', function () {
//     openPopup(popupAdd)
// });

// popupAddClose.addEventListener('click', function () {
//     closePopup(popupAdd)
// });

// function popupCloseESC(evt) {
//     if (evt.key === 'Escape') {
//         const popupOpen = document.querySelector('.popup_opened');
//         closePopup(popupOpen);

//     }
// }





