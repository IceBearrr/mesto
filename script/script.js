import Section from './Section.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
//import Popup from './Popup.js';
import {initialCards, picPopup} from '../utils/constants.js';




initialCards.forEach((item) => {
    // Создадим экземпляр карточки
    const card = new Card(item.name, item.link, ".template");
    // Создаём карточку и возвращаем наружу
    const cardElement = card.generateCard();
    // Добавляем в DOM
    elementCell.append(cardElement);
});




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

//Добавление карточек при загрузке страницы

const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = new Card(item.name, item.link, cardElement, );
        const cardEl = card.generateCard();
        cardList.addItem(cardEl);
        // const cardAdd = new Card(placeInput.value, fotoInput.value, ".template");
        // evt.preventDefault();
        // elementCell.prepend(cardAdd.generateCard());

        // popupAdd.querySelector('.popup__button-save').classList.add(properties.deactiveButtonClass);

        // const formElement = popupAdd.querySelector('form');
        // formElement.reset();
        // closePopup(popupAdd);
    }
},
picPopup);

cardList.renderItems();



// //функция добавления карточки
// function addNewElement(evt) {
    
// }


formUserNew.addEventListener('submit', addNewElement);


addButton.addEventListener('click', function () {
    openPopup(popupAdd)
});

popupAddClose.addEventListener('click', function () {
    closePopup(popupAdd)
});

function popupCloseESC(evt) {
    if (evt.key === 'Escape') {
        const popupOpen = document.querySelector('.popup_opened');
        closePopup(popupOpen);

    }
}


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

//const formEdit = new PopupWithForm()




