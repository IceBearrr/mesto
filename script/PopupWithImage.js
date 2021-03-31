// Создайте класс PopupWithImage, который наследует от Popup. 
// Этот класс должен перезаписывать родительский метод open. 
// В методе open класса PopupWithImage нужно вставлять в попап картинку и 
// атрибут src изображения и подпись к картинке.

import Popup from './Popup.js';

export default class PopupWithImage extends Popup{
    constructor(data, popupSelector){
        super(popupSelector);
        this._caption = data.name;
        this._image = data.link;
        
    }

    open() {
        this._popup.classList.add('popup_opened');
        this._element__image.src = this._image;
        this._element__image.alt = this._caption;
    }
}