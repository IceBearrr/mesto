export default class FormValidator {
    constructor(formElement, properties) {
        this._formElement = formElement;
        this._properties = properties;
        this._buttonElement = this._formElement.querySelector('.popup__button-save');
    }


    _showInputError = (inputElement, errorMessage) => {
        const elem = this._formElement.querySelector("." + inputElement.classList[1]).parentNode;
        const errorElement = elem.querySelector("span");
        inputElement.classList.add('popup__input_type_error');
        errorElement.textContent = errorMessage;
        errorElement.classList.add('popup__input_type_error');
    };

    _hideInputError = (inputElement) => {
        const elem = this._formElement.querySelector("." + inputElement.classList[1]).parentNode;
        const errorElement = elem.querySelector("span");
        inputElement.classList.remove('popup__input_type_error');
        errorElement.classList.remove('popup__input_type_error');
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

    _toggleButtonState = (inputList, properties) => {

        if (this._hasInvalidInput(inputList)) {
            this._buttonElement.classList.add(properties.deactiveButtonClass);
            this._buttonElement.classList.remove(properties.inactiveButtonClass);

        } else {
            this._buttonElement.classList.remove(properties.deactiveButtonClass);
            this._buttonElement.classList.add(properties.inactiveButtonClass);

        }
    };


    _setEventListeners = () => {
        const properties = this._properties;
        const inputList = Array.from(this._formElement.querySelectorAll('.popup__input'));
        this._toggleButtonState(inputList, properties);

        inputList.forEach((inputElement) => {
            const newValidator = new FormValidator(this._formElement, inputList, inputElement)

            inputElement.addEventListener('input', function () {
                newValidator._checkInputValidity(inputElement);
                newValidator._toggleButtonState(inputList, properties);
            });
        });
    };


    //делаем кнопку недоступной
    disableSubmitButton(properties) {
        this._buttonElement.classList.remove(properties.inactiveButtonClass);
        this._buttonElement.classList.add(properties.deactiveButtonClass);
        this._buttonElement.disabled = true;
    }


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