import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector,) {
        super(popupSelector);
        this._picPopup = this.popupSelectorElement.querySelector('.popup__img-card');
        this._picPopupText = this.popupSelectorElement.querySelector('.popup__title-pic');
    }

    open(caption, image) {
        super.open();
        this._picPopup.src = image;
        this._picPopup.setAttribute('alt', `увеличенное изображение ${caption}`)
        this._picPopupText.textContent = caption;
    }
}
