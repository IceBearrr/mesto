import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit, handleFormUpdate}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._handleFormUpdate = handleFormUpdate;

        this._inputList = this.popupElement.querySelectorAll('.popup__input');
        this._formElementAdd = document.querySelector('.popup__container_add');
        this._formElementAvatar = document.querySelector('.popup__input_enter_avatar');
        this._profileFoto = document.querySelector('.profile__image')
    }

    // собирает данные всех полей формы.  
    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);

        return this._formValues;
    }
            
    
    
            // getNewAva() {
            //     return this._formElementAvatar.value
            // }
        
            // setNewAva(foto) {
            //     this._profileFoto.src = foto;
            // }



// Перезаписывает родительский метод setEventListeners.

    setEventListeners() {
        super.setEventListeners();
        this.popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();

            //Кнопка ожидания
            const item = this._getInputValues();
            //item.close = this.close;
            item.update = this._handleFormUpdate;
            item.close = this.close.bind(this);
            console.log("item.update" + item.update);
            this.setSaveButtonText();
            this._handleFormSubmit(item);
            // this.setNewAva(this.getNewAva());
            // this._handleFormSubmit({avatar: this.getNewAva(), closeFunction: this.close()});
        })
    }

// Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.

    close() {
        this._formElementAdd.reset();
        super.close();
        if (this.popupElement.querySelector('.popup__button-save'))
            this.popupElement.querySelector('.popup__button-save').textContent = "Сохранить"
    }

    setSaveButtonText() {
        this.popupElement.querySelector('.popup__button-save').textContent = "Сохранение..."
    }

}