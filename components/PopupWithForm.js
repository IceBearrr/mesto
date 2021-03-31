import Popup from './Popup.js';
import UserInfo from './UserInfo.js'
//import formUser from '../utils/constants.js';


export default class PopupWithForm extends Popup{
    constructor({popupSelector, handleFormSubmit}){
        super(popupSelector);
        this._popupSelector = popupSelector;
        this._handleFormSubmit = handleFormSubmit;
    }
 
    // собирает данные всех полей формы.  
    _getInputValues() {
        this._inputList = this._element.querySelectorAll('.form__input');
        
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
        
        return this._formValues;
      }
// Перезаписывает родительский метод setEventListeners. 
// Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик 
// клика иконке закрытия, но и добавлять обработчик сабмита формы.

   
    _setEventListeners() {
        this._element.addEventListener('submit', (evt) => {
          evt.preventDefault();
          this._handleFormSubmit(this._getInputValues());
    
          this._element.reset();
        })
      }

      generateForm() {
        this._element = this._getTemplate();
        this._setEventListeners();
    
          return this._element;
      }
// Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.

    //close() {

    //}   

// Для каждого попапа создавайте свой экземпляр класса PopupWithForm.
}