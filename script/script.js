import Card from './Card.js';
import FormValidator from './FormValidator.js';


const editButton = document.querySelector('.profile__button-edit');
const popupEdit = document.querySelector('.popup_edit');
const nameInput = document.querySelector('.popup__input_enter_name');
const jobInput = document.querySelector('.popup__input_enter_description');
const popupEditClose = document.querySelector('.popup__close-edit');
const popupAddClose = document.querySelector('.popup__close-add');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const formUserNew = document.querySelector('.popup__container_add');
const formUser = document.querySelector('.popup__container_edit');
const addButton = document.querySelector('.profile__button-add');
const placeInput = document.querySelector('.popup__input_enter_place');
const fotoInput = document.querySelector('.popup__input_enter_foto');
const popupAdd = document.querySelector('.popup_add');
const formElementEdit = document.querySelector('.popup__container_edit');
const formElementAdd = document.querySelector('.popup__container_add');
const picPopup = document.querySelector('.popup_img');
const elementCell = document.querySelector('.elements__cell');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];


initialCards.forEach((item) => {
    // Создадим экземпляр карточки
    const card = new Card(item.name, item.link, ".template");
    // Создаём карточку и возвращаем наружу
    const cardElement = card.generateCard();
    // Добавляем в DOM
    elementCell.append(cardElement);
});


export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', popupCloseESC);
}


function closePopupByOverlay(evt) {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.target);
    }
}

popupEdit.addEventListener('click', closePopupByOverlay);
popupAdd.addEventListener('click', closePopupByOverlay);
picPopup.addEventListener('click', closePopupByOverlay);


function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', popupCloseESC);
}

picPopup.addEventListener('click', function () {
    closePopup(picPopup)
});


editButton.addEventListener('click', function () {
    openPopup(popupEdit)
});

popupEditClose.addEventListener('click', function () {
    closePopup(popupEdit)
});

function saveEditPopup(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup(popupEdit);
}

formUser.addEventListener('submit', saveEditPopup);


//функция добавления карточки
function addNewElement(evt) {
    const cardAdd = new Card(placeInput.value, fotoInput.value, ".template");
    evt.preventDefault();
    elementCell.prepend(cardAdd.generateCard());
    const formElement = popupAdd.querySelector('form');
    formElement.reset();
    closePopup(popupAdd);
}


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



const PropertiesValidation = {
    typeError: 'popup__input_type_error',
    typeActive: 'popup__input_type_error'
}


const cardValidationEdit = new FormValidator(formElementEdit, PropertiesValidation);
const cardElementEdit = cardValidationEdit.enableValidation();

const cardValidationAdd = new FormValidator(formElementAdd, PropertiesValidation);
const cardElementAdd = cardValidationAdd.enableValidation();