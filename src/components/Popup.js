export default class Popup {
    constructor(popupSelector) {
        this.popupSelectorElement = document.querySelector(popupSelector);
        this.handleEscClose = this.handleEscClose.bind(this);
        this.closePopupByOverlay = this.closePopupByOverlay.bind(this);
        this.setEventListeners();

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
        this.popupSelectorElement.classList.add('popup_opened');
        document.addEventListener('keydown', this.handleEscClose);
        this.popupSelectorElement.addEventListener('click', this.closePopupByOverlay);
    }

    close() {
        this.popupSelectorElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', this.handleEscClose);
        this.popupSelectorElement.removeEventListener('click', this.closePopupByOverlay);
    }

    setEventListeners() {
        const close_popup = this.popupSelectorElement.querySelector('.popup__close');
        close_popup.addEventListener('click', () => {
            this.close();
        });
    }
}