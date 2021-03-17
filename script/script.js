import Card from './Card.js';
import FormValidator from './FormValidator.js';
Card();
FormValidator();

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
const picPopup = document.querySelector('.popup_img');
const pic = document.querySelector('.popup__img-card');
const popupTitlePic = document.querySelector('.popup__title-pic');

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

// const elementCell = document.querySelector('.elements__cell');
// const templateEl = document.querySelector('.template');


function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', popupCloseESC);
}


function closePopupByOverlay(evt) {
    if ( event.target === event.currentTarget) {
        closePopup(event.target);
    }
}

popupEdit.addEventListener('click', closePopupByOverlay);
popupAdd.addEventListener('click', closePopupByOverlay);
picPopup.addEventListener('click', closePopupByOverlay);



function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', popupCloseESC);
}


editButton.addEventListener('click', function () {
    openPopup(popupEdit)
});

popupEditClose.addEventListener('click', function () {
    closePopup(popupEdit)
});

function saveEditPopup(evt) {console.log("save edit")
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup(popupEdit);
}

formUser.addEventListener('submit', saveEditPopup);

//функция добавления карточки
function addNewElement(evt) {
    console.log("save");
    evt.preventDefault();
  elementCell.prepend(
    getCard({
      name: placeInput.value,
      link: fotoInput.value,
    })
  );
  closePopup(popupAdd);
}


formUserNew.addEventListener('submit', addNewElement);



//добавляем карточки
function render() {
    elementCell.append(...initialCards.map(getCard));
};

function getCard(item) {
    const newCard = templateEl.content.cloneNode(true);
    const nameOfPlace = newCard.querySelector('.element__place-name');
    nameOfPlace.textContent = item.name;
    const linkOfPlace = newCard.querySelector('.element__image');
    linkOfPlace.src = item.link;

    const removeBtn = newCard.querySelector('.element__remove');
    removeBtn.addEventListener('click', cardDelete);

    const likeBtn = newCard.querySelector('.element__like');
    likeBtn.addEventListener('click', cardLike);

    const picBtn = newCard.querySelector('.element__image');
    picBtn.addEventListener('click', () => {
        picOpen(item)
    });

    return newCard;
}



render();



addButton.addEventListener('click', function () {
    openPopup(popupAdd)
});

popupAddClose.addEventListener('click', function () {
    closePopup(popupAdd)
});

function popupCloseESC(evt) {
  if (evt.key === 'Escape') {
      const open_popup = document.querySelector('.popup_opened');
      closePopup(open_popup);

  }
}