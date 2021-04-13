import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit, handleFormUpdate}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._handleFormUpdate = handleFormUpdate;

        this._inputList = this.popupSelectorElement.querySelectorAll('.popup__input');
        this._formElementAdd = document.querySelector('.popup__container_add');
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
        this.popupSelectorElement.addEventListener('submit', (evt) => {
            evt.preventDefault();

            //Кнопка ожидания
            let item = this._getInputValues();
            //item.close = this.close;
            item.update = this._handleFormUpdate;
            item.close = this.close.bind(this);
            console.log("item.update" + item.update);
            this.save_button();
            this._handleFormSubmit(item);

        })
    }

// Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.

    close() {
        this._formElementAdd.reset();
        super.close();
    }
}