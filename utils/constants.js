
const editButton = document.querySelector('.profile__button-edit');
const popupEdit = document.querySelector('.popup_edit');
const nameInput = document.querySelector('.popup__input_enter_name');
const jobInput = document.querySelector('.popup__input_enter_description');
const popupEditClose = document.querySelector('.popup__close-edit');
const popupAddClose = document.querySelector('.popup__close-add');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
export const formUserNew = document.querySelector('.popup__container_add');
//export const formUser = document.querySelector('.popup__container_edit');
const addButton = document.querySelector('.profile__button-add');
const placeInput = document.querySelector('.popup__input_enter_place');
const fotoInput = document.querySelector('.popup__input_enter_foto');
const popupAdd = document.querySelector('.popup_add');
export const formElementEdit = document.querySelector('.popup__container_edit');
export const formElementAdd = document.querySelector('.popup__container_add');
export const picPopup = document.querySelector('.popup_img');
const elementCell = document.querySelector('.elements__cell');

export const initialCards = [
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


export const popupCloseButton = document.querySelector('.popup__close');

