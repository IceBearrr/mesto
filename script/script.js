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
let foto;

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


function saveAddPopup(evt) {
  evt.preventDefault();
  placeName.textContent = placeInput.value;
  foto.textContent = fotoInput.value;
  closeAddPopup();
}
formUser.addEventListener('submit', saveAddPopup);



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


//функция удаления карточки

const removeBtn = event => {
    event.target.closest('.element').remove()
}
  
document.querySelectorAll('.element__remove').forEach(item =>
item.addEventListener("click", removeBtn));



//условие на лайк

onclick="this.className = (this.className == '.element__like' ? '.element__like:active' : '.element__like')";


// const likeBtn = document.querySelector('.element__like');

// function activeLike() {
//   const likeBtn = document.querySelector('.element__like');
//   likeBtn.onclick = function() {
//     if (this.innerHTML === likeBtn) this.innerHTML = '.element__like:active';
//     else this.innerHTML = likeBtn;
//     //предотвращаем переход по ссылке href
//     return false;
//   }

//  }

// $('.element__like').on('click', function() {
//   $('.element__like').toggleClass('element__like:active');
// });


// for (const likeBtn = document.querySelector('.element__like')) {
//   button.addEventListener('click', function() {
//     this.classList.toggle('clicked');
//     this.parentNode.classList.toggle('.element__like:active');
//   });
// }