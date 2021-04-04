export default class Popup {
    constructor(popupSelector) {
        this.popupSelector = document.querySelector(popupSelector);
    }

    open() {
        this.setEventListeners();
        this.popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
        this.popupSelector.addEventListener('click', (evt) => this._closePopupByOverlay(evt));
    }
    
    close() {
        this.popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
        this.popupSelector.removeEventListener('click', (evt) =>  this._closePopupByOverlay(evt));
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
    }}

    _closePopupByOverlay(evt) {
        if (evt.target === evt.currentTarget) {
           this.close();
   }}
       
    setEventListeners() {
         const close_popup = this.popupSelector.querySelector('.popup__close');
        close_popup.addEventListener('click', () => {
            this.close();
          });
    }
}