export default class FormValidator {
    constructor(formElement, properties, buttonElementSave) {
        this._formElement = formElement;
        this.properties = properties;
        this._buttonElementSave = this._formElement.querySelector(buttonElementSave);
        ;
    }

    //делаем кнопку недоступной
    disableSubmitButton = (properties) => {
        this._buttonElementSave.classList.remove(properties.inactiveButtonClass);
        this._buttonElementSave.classList.add(properties.deactiveButtonClass);
        this._buttonElementSave.disabled = true;
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

    _checkInputValidity(inputElement) {

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

    _toggleButtonState() {
        if (this._hasInvalidInput(this.inputList)) {
            this.disableSubmitButton(this.properties);
            // this._buttonElementSave.classList.add(properties.deactiveButtonClass);
            // this._buttonElementSave.classList.remove(properties.inactiveButtonClass);

        } else {

            this._buttonElementSave.disabled = false;
            this._buttonElementSave.classList.remove(this.properties.deactiveButtonClass);
            this._buttonElementSave.classList.add(this.properties.inactiveButtonClass);

        }
    };


    inputEvent(e) {
        const inputElement = e.target;
        this.newValidator._checkInputValidity(inputElement);
        let check = this.newValidator._toggleButtonState.bind(this);
        check();

    };

    setEventListeners = () => {
        //const properties = this.properties;
        this.inputList = Array.from(this._formElement.querySelectorAll('.popup__input'));

        this._toggleButtonState();

        this.inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });

    };


    enableValidation() {
        this._formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        this.setEventListeners();

        // this._formElement.addEventListener('submit', function (evt) {
        //     evt.preventDefault();
        // });
        // const fieldsetList = Array.from(this._formElement.querySelectorAll('.popup__set'));
        // fieldsetList.forEach(() => {
        //     this.setEventListeners();
        // });
    };

}