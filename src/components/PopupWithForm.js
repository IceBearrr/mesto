import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit, handleFormUpdate}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._handleFormUpdate = handleFormUpdate;
        this._inputList = this.popupElement.querySelectorAll('.popup__input');
    }

    // собирает данные всех полей формы.  
    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);

        return this._formValues;
    }

// Перезаписывает родительский метод setEventListeners.

    setEventListeners() {
        super.setEventListeners();
        this.popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();

            //Кнопка ожидания
            const item = this._getInputValues();
            //item.close = this.close;
            item.update = this._handleFormUpdate;
            item.close = this.close.bind(this);
            console.log("item.update" + item.update);
            this.setSaveButtonText();
            this._handleFormSubmit(item);
        })
    }

// Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.

    close() {
        this.popupElement.querySelector('.popup__form').reset();
        super.close();
        if (this.popupElement.querySelector('.popup__button-save'))
            this.popupElement.querySelector('.popup__button-save').textContent = "Сохранить"
    }

    open(formValues = null) {
        super.open();
        if (formValues) {
            this._inputList.forEach(input => input.value = formValues[input.name]);
        }
    }

    setSaveButtonText() {
        this.popupElement.querySelector('.popup__button-save').textContent = "Сохранение..."
    }
}