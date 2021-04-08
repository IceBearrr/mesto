import Popup from './Popup.js';
import Section from "./Section";
import {initialCards} from "../utils/constants";

export default class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._inputList = this.popupSelector.querySelectorAll('.popup__input');
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
        this.popupSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());

            this._container = document.querySelector('.elements__cell');
            this._container.append(this.generateForm());
            this.close();
        })
    }

    generateForm() {
        //this._element = this._getTemplate();
        this.setEventListeners();
        return this._element;
    }

// Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.

    close() {
        this._formElementAdd.reset();
        super.close();
    }
}