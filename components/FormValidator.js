export default class FormValidator {

    constructor(formElement, properties) {
        this._formElement = formElement;
        this._properties = properties;
    }


    _showInputError = (inputElement, errorMessage) => {
        const errorElement = this._formElement.querySelector("." + ${inputElement.id} + "-error");
        inputElement.classList.add(this._properties.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._properties.inputErrorClass);
    };

    _hideInputError = (inputElement) => {
        const errorElement = this._formElement.querySelector("." + ${inputElement.id} + "-error");
        inputElement.classList.remove(this._properties.inputErrorClass);
        errorElement.classList.remove(this._properties.inputErrorClass);
        errorElement.textContent = '';
    };

    _checkInputValidity = (inputElement) => {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };


    _hasInvalidInput = (inputList) => {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    }

    _toggleButtonState = (inputList, buttonElement, properties) => {

        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(properties.deactiveButtonClass);
            buttonElement.classList.remove(properties.inactiveButtonClass);

        } else {
            buttonElement.classList.remove(properties.deactiveButtonClass);
            buttonElement.classList.add(properties.inactiveButtonClass);

        }
    };


    _setEventListeners = () => {
        const properties = this._properties;
        const inputList = Array.from(this._formElement.querySelectorAll('.popup__input'));
        const buttonElement = this._formElement.querySelector('.popup__button-save');
        this._toggleButtonState(inputList, buttonElement, properties);

        inputList.forEach((inputElement) => {
            const newValidator = new FormValidator(this._formElement, inputList, inputElement, buttonElement)

            inputElement.addEventListener('input', function () {
                newValidator._checkInputValidity(inputElement);
                newValidator._toggleButtonState(inputList, buttonElement, properties);
            });
        });
    };

    enableValidation() {
        this._formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        const fieldsetList = Array.from(this._formElement.querySelectorAll('.popup__set'));
        fieldsetList.forEach(() => {
            this._setEventListeners();
        });
    };

}