import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector,) {
        super(popupSelector);
        this.popupSelector = document.querySelector(popupSelector);
        this._picPopup = this.popupSelector.querySelector('.popup__img-card');

        this._picPopupText = this.popupSelector.querySelector('.popup__title-pic');

    }

    open(caption, image) {
        super.open();


        this._picPopup.src = image;
        this._picPopup.alt = caption;
        this._picPopupText.textContent = this._caption;
    }
}
