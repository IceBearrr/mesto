const editButton = document.querySelector('.profile__button-edit');
const popupEdit = document.querySelector('.popup_edit');
let nameInput = document.querySelector('.popup__input_enter_name');
let jobInput = document.querySelector('.popup__input_enter_description');
const popupEditClose = document.querySelector('.popup__close-edit');
const popupAddClose = document.querySelector('.popup__close-add');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
const formUser = document.querySelector('.popup__container');
const addButton = document.querySelector('.profile__button-add');
let placeInput = document.querySelector('.popup__input_enter_place');
let fotoInput = document.querySelector('.popup__input_enter_foto');
const popupAdd = document.querySelector('.popup_add');
let placeName;
const picPopup = document.querySelector('.popup_img');
const pic = document.querySelector('.popup__img-card');
const formPic = document.querySelector('.popup__block-img');




const popup = document.querySelector('.popup');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}
openPopup(popupEdit);

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}
closePopup(popupEdit);


// попап имя
function openEditPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
 }
editButton.addEventListener('click', openPopup);

function closeEditPopup() {
}
popupEditClose.addEventListener('click', closePopup);

function saveEditPopup(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup();
}
formUser.addEventListener('submit', saveEditPopup);











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

  // const picBtn = newCard.querySelector('.popup__title-pic');
  // picBtn.addEventListener('click', picOpen);

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

// function picOpen(event) {
//   let popupTitlePic = document.querySelector('.element');
//   let textPic = event.target.parentElement.lastElementChild.firstElementChild.textContent
//   popupTitlePic.textContent = textPic;

//   pic.setAttribute("src", event.target.src);
//   picPopup.classList.add('popup_opened');
// }

// document.querySelectorAll('.element__image').forEach(item =>
//   item.addEventListener("click", picBtn));


// picPopup.addEventListener('click', closePopup);

// function closePicPopup() {
//   picPopup.classList.remove('popup_opened');
// }


render();















// // попап карточка
// function openAddPopup() {
//   placeInput.value;
//   fotoInput.value;
//   popupAdd.classList.add('popup_opened');
// }
// addButton.addEventListener('click', openAddPopup);

// function closeAddPopup() {
//   popupAdd.classList.remove('popup_opened');
// }
// popupAddClose.addEventListener('click', closeAddPopup);

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