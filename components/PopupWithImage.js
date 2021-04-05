import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector, caption, image) {
        super();
        this._caption = caption;
        this._image = image;
        this.popupSelector = document.querySelector(popupSelector);
    }

    open() {
        this.popupSelector.classList.add('popup_opened');
        this.setEventListeners();
        document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
        this.popupSelector.addEventListener('click', (evt) => this._closePopupByOverlay(evt));
        this._picPopup = this.popupSelector.querySelector('.popup__img-card');
        this._picPopupText = this.popupSelector.querySelector('.popup__title-pic');

        this._picPopup.src = this._image;
        this._picPopup.alt = this._caption;
        this._picPopupText.textContent = this._caption;
    }
}