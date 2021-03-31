import { popupCloseButton } from '../utils/constants.js';

export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
        this._closePopupByOverlay = this._closePopupByOverlay.bind(this);
    }

    open() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
        this._popupSelector.addEventListener('click', this._closePopupByOverlay(evt));
    }
    
    close() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
        this._popupSelector.removeEventListener('click', this._closePopupByOverlay(evt));
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
    }}
       
    setEventListeners() {
        popupCloseButton.addEventListener('click', () => {
            this.close();
          });
    }

    _closePopupByOverlay(evt) {
         if (evt.target === evt.currentTarget) {
        closePopup(evt.target);
    }}
}