const editButton = document.querySelector('.profile__button-edit');
const popupEdit = document.querySelector('.popup__edit');
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
const popupAdd = document.querySelector('.popup__add');
let placeName;
const picPopup = document.querySelector('.popup__img');
const pic = document.querySelector('.popup__img-card');
const formPic = document.querySelector('.popup__block-img');


// попап имя
function openEditPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  popupEdit.classList.add('popup_opened');
}
editButton.addEventListener('click', openEditPopup);

function closeEditPopup() {
  popupEdit.classList.remove('popup_opened');
}
popupEditClose.addEventListener('click', closeEditPopup);

function saveEditPopup(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeEditPopup();
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

//задаем template код
function getItemHTML(item) {
  return ` <li class="element">
                <img class="element__image" src="${item.link}" alt="">
                <button class="element__remove" aria-label="Удаление" type="button"></button>
                <div class="element__cell">
                    <h2 class="element__place-name">${item.name}</h2>
                    <button class="element__like" aria-label="Лайк" type="button"></button>
                </div>
            </li>`
}

function getCard(item) {
  const newCard = templateEl.content.cloneNode(true);
  const nameOfPlace = newCard.querySelector('.element__place-name');
  nameOfPlace.textContent = item.name;
  const linkOfPlace = newCard.querySelector('.element__image');
  linkOfPlace.src = item.link;

  return newCard;
}

render();


// попап карточка
function openAddPopup() {
  placeInput.value;
  fotoInput.value;
  popupAdd.classList.add('popup_opened');
}
addButton.addEventListener('click', openAddPopup);

function closeAddPopup() {
  popupAdd.classList.remove('popup_opened');
}
popupAddClose.addEventListener('click', closeAddPopup);

const btnSave = document.querySelector('.popup__button-save;')

//функция добавления карточки
function addNewElement(event) {
  event.preventDefault();
  elementCell.prepend(
    getCard({
      name: placeInput.value,
      link: fotoInput.value,
    })
  );
  closeAddPopup();
}

btnSave.addEventListener('submit', addNewElement);


//функция удаления карточки

const removeBtn = event => {
  event.target.closest('.element').remove()
}

document.querySelectorAll('.element__remove').forEach(item =>
  item.addEventListener("click", removeBtn));



//условие на лайк

const likeBtn = event => {
  // event.target.closest('.element').remove()
  if (event.target.getAttribute("class") === "element__like")
    event.target.classList.add('element__like_black');
  else
    event.target.classList.remove('element__like_black');
}

document.querySelectorAll('.element__like').forEach(item =>
  item.addEventListener("click", likeBtn));


//побольше

const picBtn = event => {
  let popupTitlePic = document.querySelector('.popup__title-pic');
  let textPic = event.target.parentElement.lastElementChild.firstElementChild.textContent
  popupTitlePic.textContent = textPic;

  pic.setAttribute("src", event.target.src);
  picPopup.classList.add('popup_opened');
}

document.querySelectorAll('.element__image').forEach(item =>
  item.addEventListener("click", picBtn));


picPopup.addEventListener('click', closePicPopup);

function closePicPopup() {
  picPopup.classList.remove('popup_opened');
}
