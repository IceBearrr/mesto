import PopupWithForm from './PopupWithForm.js';

export default class PopupAvatar extends PopupWithForm {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        //this._popupSelector = this.popupElement.querySelectorAll(popupSelector);

        this._inputList = this.popupElement.querySelectorAll('.popup__input');
        this._formElementAvatar = document.querySelector('.popup__input_enter_avatar');
        this._profileFoto = document.querySelector('.profile__image')
    }

    getNewAva() {
        return this._formElementAvatar.value
    }

    setNewAva(foto) {
        this._profileFoto.src = foto;
    }


// Перезаписывает родительский метод setEventListeners.
    setEventListeners() {
        super.setEventListeners();
        this.popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.setNewAva(this.getNewAva());
            this.setSaveButtonText();
            this._handleFormSubmit({avatar: this.getNewAva(), closeFunction: this.close()});

        })
    }
}