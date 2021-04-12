import Popup from './Popup.js';

export default class PopupAvatar extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        //this._popupSelector = this.popupSelectorElement.querySelectorAll(popupSelector);

        this._inputList = this.popupSelectorElement.querySelectorAll('.popup__input');
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
        this.popupSelectorElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.setNewAva(this.getNewAva());
            this.save_button();
            this._handleFormSubmit({avatar: this.getNewAva(), closeFunction: this.close()});

        })
    }
}