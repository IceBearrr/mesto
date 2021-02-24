const editButton = document.querySelector('.profile__button-edit');
const popupEdit = document.querySelector('.popup_edit');
const nameInput = document.querySelector('.popup__input_enter_name');
const jobInput = document.querySelector('.popup__input_enter_description');
const popupEditClose = document.querySelector('.popup__close-edit');
const popupAddClose = document.querySelector('.popup__close-add');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const formUser = document.querySelector('.popup__container');
const formUserAdd = document.querySelector('.popup__container_add');
const addButton = document.querySelector('.profile__button-add');
const placeInput = document.querySelector('.popup__input_enter_place');
const fotoInput = document.querySelector('.popup__input_enter_foto');
const popupAdd = document.querySelector('.popup_add');
const picPopup = document.querySelector('.popup_img');
const pic = document.querySelector('.popup__img-card');
const popupTitlePic = document.querySelector('.popup__title-pic');
const popupClose = document.querySelector('.popup__close');

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');

}

// попап имя

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
function addNewElement(event) {
  event.preventDefault();
  elementCell.prepend(
    getCard({
      name: placeInput.value,
      link: fotoInput.value,
    })
  );
  closePopup(popupAdd);
}

formUserAdd.addEventListener('submit', addNewElement);

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

const elementCell = document.querySelector('.elements__cell');
const templateEl = document.querySelector('.template');

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


function cardDelete(event) {
    const targetEl = event.target;
    const targetItem = targetEl.closest('.element');
    targetItem.remove();
}

function cardLike(event) {
    if (event.target.getAttribute("class") === "element__like")
        event.target.classList.add('element__like_black');
    else
        event.target.classList.remove('element__like_black');
}

function picOpen(item) {
    popupTitlePic.textContent = item.name
    pic.setAttribute("src", item.link);
    openPopup(picPopup);
}

picPopup.addEventListener('click', function () {
    closePopup(picPopup)
});

render();



// попап карточка
function openAddPopup() {
    placeInput.value;
    fotoInput.value;
}

addButton.addEventListener('click', function () {
    openPopup(popupAdd)
});

popupAddClose.addEventListener('click', function () {
    closePopup(popupAdd)
});

// function popupCloseESC(evt) {
//   // console.log("close");
//   if (evt.key === 'Escape');
//     closePopup(popupEdit);
//     closePopup(picPopup);
//     closePopup(popupAdd);
// }

// document.addEventListener('keydown', popupCloseESC);

// function popupCloseOverlay() {
//   console.log("close");
  
//     closePopup(popupEdit);
//     closePopup(picPopup);
//     closePopup(popupAdd);
// }

// document.addEventListener('click', popupCloseOverlay);


// // Вынесем все необходимые элементы формы в константы
// const formElement = document.querySelector('.popup__container');
// const formInput = formElement.querySelector('.popup__input');
// const formError = formElement.querySelector(`.${formInput.id}-error`);

// formElement.addEventListener('submit', function (evt) {
//   // Отменим стандартное поведение
//   evt.preventDefault();
// });

// // Слушатель события input
// formInput.addEventListener('input', function (evt) {
//   // Выведем в консоль значение свойства validity.valid поля ввода, 
//   // на котором слушаем событие input
//   console.log(evt.target.validity);
// }); 



// // 









