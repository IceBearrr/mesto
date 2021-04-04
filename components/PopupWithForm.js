import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
    constructor({popupSelector, handleFormSubmit}){
        super();
        this.popupSelector = document.querySelector(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
    }
 
    // собирает данные всех полей формы.  
    _getInputValues() {
        this._inputList = this.popupSelector.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
        
        return this._formValues;
      }

// Перезаписывает родительский метод setEventListeners. 
   
    setEventListeners() {
        super.setEventListeners();   
         this.popupSelector.addEventListener('submit', (evt) => {
         evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());

          this.close();
        })
      }

      generateForm() {
        this._element = this._getTemplate();
        this._setEventListeners();
    
          return this._element;
      }
// Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.

    close() {
      const formElementAdd = document.querySelector('.popup__container_add');
      formElementAdd.reset();
      super.close();}
}