export default class FormValidator {
    constructor ()


    const FormValidator = new FormValidator(configuration, formElement);

_showInputError(formElement, inputElement, errorMessage){
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
};

_hideInputError(formElement, inputElement){
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.classList.remove('popup__input-error_active');
    errorElement.textContent = '';
};

_checkInputValidity(formElement, inputElement){
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

_hasInvalidInput(inputList){
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

_toggleButtonState(inputList, buttonElement){

    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('popup__button-deactive');
        buttonElement.classList.remove('popup__button-inactive');

    } else {
        buttonElement.classList.remove('popup__button-deactive');
        buttonElement.classList.add('popup__button-inactive');

    }
};

_setEventListeners(formElement){
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__button-save');
    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

//публичный метод включения валидации
enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        const fieldsetList = Array.from(formElement.querySelectorAll('.popup__set'));
        fieldsetList.forEach((fieldset) => {
            setEventListeners(fieldset);
        });
    });
};
enableValidation();
}

// const showInputError = (formElement, inputElement, errorMessage) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.add('popup__input_type_error');
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add('popup__input-error_active');
// };

// const hideInputError = (formElement, inputElement) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.remove('popup__input_type_error');
//     errorElement.classList.remove('popup__input-error_active');
//     errorElement.textContent = '';
// };

// const checkInputValidity = (formElement, inputElement) => {
//     if (!inputElement.validity.valid) {
//         showInputError(formElement, inputElement, inputElement.validationMessage);
//     } else {
//         hideInputError(formElement, inputElement);
//     }
// };



// const hasInvalidInput = (inputList) => {
//     return inputList.some((inputElement) => {
//         return !inputElement.validity.valid;
//     })
// }

// const toggleButtonState = (inputList, buttonElement) => {

//     if (hasInvalidInput(inputList)) {
//         buttonElement.classList.add('popup__button-deactive');
//         buttonElement.classList.remove('popup__button-inactive');

//     } else {
//         buttonElement.classList.remove('popup__button-deactive');
//         buttonElement.classList.add('popup__button-inactive');

//     }
// };

// const setEventListeners = (formElement) => {
//     const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
//     const buttonElement = formElement.querySelector('.popup__button-save');
//     toggleButtonState(inputList, buttonElement);

//     inputList.forEach((inputElement) => {
//         inputElement.addEventListener('input', function () {
//             checkInputValidity(formElement, inputElement);
//             toggleButtonState(inputList, buttonElement);
//         });
//     });
// };

// //публичный метод включения валидации
// const enableValidation = () => {
//     const formList = Array.from(document.querySelectorAll('.popup__form'));
//     formList.forEach((formElement) => {
//         formElement.addEventListener('submit', function (evt) {
//             evt.preventDefault();
//         });
//         const fieldsetList = Array.from(formElement.querySelectorAll('.popup__set'));
//         fieldsetList.forEach((fieldset) => {
//             setEventListeners(fieldset);
//         });
//     });
// };
// enableValidation();
