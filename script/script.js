let editButton = document.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let nameInput = document.querySelector('.popup__input_enter_name');
let jobInput = document.querySelector('.popup__input_enter_description');
let popupClose = document.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let formUser = document.querySelector('.popup__container');
let addButton = document.querySelector('.profile__button-add');



function openEditPopup() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
    popup.classList.add('popup_opened');
}

function closeEditPopup() {
    popup.classList.remove('popup_opened');
}


function saveEditPopup(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closeEditPopup();
}


editButton.addEventListener('click', openEditPopup);

popupClose.addEventListener('click', closeEditPopup);

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

//находим template
const templateEl = document.querySelector('.template'); 

//добавляем карточки
function render() {
    const html = initialCards
        .map(getItemHTML)
        .join('')

    templateEl.append(...html);
}
//console.log(templateEl);

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


//     // const removeBtn = newItem.querySelector('.button_remove');
//     // removeBtn.addEventListener('click', handleDelete);

//     // const duplicateBtn = newItem.querySelector('.button_duplicate');
//     // duplicateBtn.addEventListener('click', handleDuplicate);

//     addButton.addEventListener('click', handleEdit);

     return newCard;
}

render();




//   function openAddPopup() {
//     // placeInput.value = profileName.textContent;
//     // jobInput.value = profileDescription.textContent;
//     popup.classList.add('popup_opened');
// }
// addButton.addEventListener('click', openAddPopup);




// const template = document.querySelector('.elements__cell');





//функция удаления карточки

const handleClick = event => {
    event.target.closest('.element').remove()
}
  
document.querySelectorAll('.element__remove').forEach(item =>
item.addEventListener("click", handleClick));