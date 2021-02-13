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
    picBtn.addEventListener('click', picOpen);

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

function picOpen(event) {
    let popupTitlePic = document.querySelector('.popup__title-pic');
    let textPic = event.target.parentElement.lastElementChild.firstElementChild.textContent
    popupTitlePic.textContent = textPic;

    pic.setAttribute("src", event.target.src);
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

// const btnSave = document.querySelector('.popup__button-save')

// //функция добавления карточки
// function addNewElement(event) {
//   event.preventDefault();
//   elementCell.prepend(
//     getCard({
//       name: placeInput.value,
//       link: fotoInput.value,
//     })
//   );
//   closeAddPopup();
// }

// btnSave.addEventListener('submit', addNewElement);


// //функция удаления карточки

// // const removeBtn = event => {
// //   event.target.closest('.element').remove()
// // }

// // document.querySelectorAll('.element__remove').forEach(item =>
// //   item.addEventListener("click", removeBtn));


// //побольше

// const picBtn = event => {
//   let popupTitlePic = document.querySelector('.popup__title-pic');
//   let textPic = event.target.parentElement.lastElementChild.firstElementChild.textContent
//   popupTitlePic.textContent = textPic;

//   pic.setAttribute("src", event.target.src);
//   picPopup.classList.add('popup_opened');
// }

// document.querySelectorAll('.element__image').forEach(item =>
//   item.addEventListener("click", picBtn));


// picPopup.addEventListener('click', closePicPopup);

// function closePicPopup() {
//   picPopup.classList.remove('popup_opened');
// }


// const cardsContainer = document.querySelector(".elements");
// const cardTemplate = document.querySelector(".template-element");
// const initialCards = [
//   {
//     name: "Архыз",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
//     alt: "Архыз",
//   },
// ];
// function render() {
//   cardsContainer.append(...initialCards.map(createCards));
// }
// function createCards(item) {
//   const element = cardTemplate.content.cloneNode(true);
//   const elementTitle = element.querySelector(".element__title");
//   const elementImage = element.querySelector(".element__image");
//   const likeElementBtn = element.querySelector(".element__like");
//   const deleteElementBtn = element.querySelector(".element__trash");
//   elementTitle.textContent = item.name;
//   elementImage.src = item.link;
//   elementImage.alt = item.alt;
//   deleteElementBtn.addEventListener("click", deleteElement);
//   likeElementBtn.addEventListener("click", likeElement);
//   elementImage.addEventListener("click", openImage);
//   return element;
// }
// function addNewElement(event) {
//   event.preventDefault();
//   cardsContainer.prepend(
//     createCards({
//       name: newCardNameInput.value,
//       link: newCardImageInput.value,
//       alt: newCardNameInput.value,
//     })
//   );
//   closePopup(event);
// }