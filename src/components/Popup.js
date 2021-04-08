export default class Popup {
    constructor(popupSelector) {
        this.popupSelector = document.querySelector(popupSelector);
        this.handleEscClose = this.handleEscClose.bind(this);
        this.closePopupByOverlay = this.closePopupByOverlay.bind(this);
    }

    handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    closePopupByOverlay(evt) {
        if (evt.target === evt.currentTarget) {
            this.close();
        }
    }
    
    open() {
        this.setEventListeners();
        this.popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this.handleEscClose);
        this.popupSelector.addEventListener('click', this.closePopupByOverlay);
    }

    close() {
        this.popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this.handleEscClose);
        this.popupSelector.removeEventListener('click', this.closePopupByOverlay);
    }

    setEventListeners() {
        const close_popup = this.popupSelector.querySelector('.popup__close');
        close_popup.addEventListener('click', () => {
            this.close();
        });
    }
}