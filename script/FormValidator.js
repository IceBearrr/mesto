export default class FormValidator {

    constructor(formElement, inputList, inputElement, buttonElement) {
        this._formElement = formElement;
        this._inputList = inputList;
        this._inputElement = inputElement;

        this._buttonElement = buttonElement;

    }


    _showInputError(errorMessage) {
        const errorElement = this._formElement.querySelector(`.${this._inputElement.id}-error`);
        this._inputElement.classList.add('popup__input_type_error');
        errorElement.textContent = errorMessage;
        errorElement.classList.add('popup__input-error_active');
    };

    _hideInputError() {
        const errorElement = this._formElement.querySelector(`.${this._inputElement.id}-error`);
        this._inputElement.classList.remove('popup__input_type_error');
        errorElement.classList.remove('popup__input-error_active');
        errorElement.textContent = '';
    };

    checkInputValidity() {
        if (!this._inputElement.validity.valid) {
            this._showInputError(this._inputElement.validationMessage);
        } else {
            this._hideInputError();
        }
    };

    _hasInvalidInput() {
        return this._inputList.some(() => {
            return !this._inputElement.validity.valid;
        })
    }

    toggleButtonState() {

        if (this._hasInvalidInput(this._inputList)) {
            this._buttonElement.classList.add('popup__button-deactive');
            this._buttonElement.classList.remove('popup__button-inactive');

        } else {
            this._buttonElement.classList.remove('popup__button-deactive');
            this._buttonElement.classList.add('popup__button-inactive');

        }
    };


}