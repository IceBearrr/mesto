let editButton = document.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let nameInput = document.querySelector('.popup__input_type_one');
let jobInput = document.querySelector('.popup__input_type_two');
let popupClose = document.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');


function openEditPopup() {
    nameValue = profileName.textContent;
    jobValue = profileDescription.textContent;
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

popupSave.addEventListener('submit', saveEditPopup);