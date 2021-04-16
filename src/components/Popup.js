export default class Popup {
    constructor(popupSelector) {
        this.popupElement = document.querySelector(popupSelector);
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
        this.popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this.handleEscClose);
        this.popupElement.addEventListener('click', this.closePopupByOverlay);
    }

    close() {
        this.popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', this.handleEscClose);
        this.popupElement.removeEventListener('click', this.closePopupByOverlay);
        // if (this.popupElement.querySelector('.popup__button-save'))
        //     this.popupElement.querySelector('.popup__button-save').textContent = "Сохранить"

    }

    // setSaveButtonText() {
    //     this.popupElement.querySelector('.popup__button-save').textContent = "Сохранение..."
    // }


    setEventListeners() {
        const closePopup = this.popupElement.querySelector('.popup__close');
        closePopup.addEventListener('click', () => {
            this.close();
        });
    }
}