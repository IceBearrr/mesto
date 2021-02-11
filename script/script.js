let editButton = document.querySelector('.profile__button-edit');
let popupEdit = document.querySelector('.popup__edit');
let nameInput = document.querySelector('.popup__input_enter_name');
let jobInput = document.querySelector('.popup__input_enter_description');
let popupEditClose = document.querySelector('.popup__close-edit');
let popupAddClose = document.querySelector('.popup__close-add');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let formUser = document.querySelector('.popup__container');
let addButton = document.querySelector('.profile__button-add');
let placeInput = document.querySelector('.popup__input_enter_place');
let fotoInput = document.querySelector('.popup__input_enter_foto');
let popupAdd = document.querySelector('.popup__add');
let placeName;
let picPopup = document.querySelector('.popup__img');
let pic = document.querySelector('.popup__img-card');



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

//находим template
const templateEl = document.querySelector('.template');

//добавляем карточки
function render() {
  const html = initialCards
    .map(getCard)

  elementCell.append(...html);
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




//функция добавления карточки

function saveAddPopup(evt) {
  evt.preventDefault();
  placeName.textContent = placeInput.value;
  foto.textContent = fotoInput.value;
  const cardItem = getCard({name: placeName.textContent});
  elementCell.prepend(cardItem);
  closeAddPopup();
  
}
formUser.addEventListener('submit', saveAddPopup);

// function saveAddPopup() {
    
//     placeName.textContent = placeInput.value;
//     foto.textContent = fotoInput.value;
//     const cardItem = getCard({});
//     elementCell.prepend(cardItem);

//     closeAddPopup();
//   }
//   formUser.addEventListener('submit', saveAddPopup);



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


