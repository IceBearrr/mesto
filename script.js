let editButton = document.querySelector('.profile__button-edit');

let formElement = document.querySelector('.popup');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__description');
let popupClose = document.querySelector('.popup__close');
let popupSave = document.querySelector('.popup__button-save');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let nameValue = nameInput.value;
let jobValue = jobInput.value;

console.log(nameValue);
console.log(jobValue);


editButton.addEventListener('click', function () {
    nameValue = profileName.textContent;
    formElement.classList.add('popup_opened');
    console.log("open");
});

popupClose.addEventListener('click', function () {
    formElement.classList.remove('popup_opened');
});


popupSave.addEventListener('click', function () {

    let popupName = document.querySelector('.popup__name');
    let popupDescription = document.querySelector('.popup__description');


    profileName.textContent = popupName.value;
    profileDescription.textContent = popupDescription.value;
    console.log("save");

    formElement.classList.remove('popup_opened');
});