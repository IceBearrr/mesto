let editButton = document.querySelector('.profile__button-edit');
let popupSave = document.querySelector('.popup__button-save');
let formElement = document.querySelector('.popup');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_description');
let popupClose = document.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');


function openEditPopup(){
    let nameValue = nameInput.value;
    let jobValue = jobInput.value;
    nameValue = profileName.textContent;
    jobValue = profileDescription.textContent;
    formElement.classList.add('popup_opened');
}

function closeEditPopup(){
    formElement.classList.remove('popup_opened');
}


function saveEditPopup(evt){
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
}


editButton.addEventListener('click', openEditPopup);

popupClose.addEventListener('click', closeEditPopup);

popupSave.addEventListener('submit', saveEditPopup, closeEditPopup);