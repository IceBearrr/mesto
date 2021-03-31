//import openPopup from '../script.js'

export default class Card {
    constructor(name, link, cardSelector) {
        this._caption = name;
        this._image = link;
        this._cardSelector = cardSelector;
        //this._element__image = element.querySelector('.element__image') Белый
    }

    _getTemplate() {
        // забираем разметку из HTML и клонируем элемент
        const newCard = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);
        console.log("топ ");


        // вернём DOM-элемент карточки
        return newCard;
    }

    generateCard() {
        this._element = this._getTemplate();
        //this._setEventListeners();
        this._element__image = this._element.querySelector('.element__image')
        this._element__image.src = this._image;
        this._element__image.alt = this._caption;
        this._element.querySelector('.element__place-name').textContent = this._caption;
        console.log("что то рисую " + this._element);

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.element__remove').addEventListener('click', () => {
            this._cardDelete()
        });
        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._cardLike()
        });
        this._element__image.addEventListener('click', () => {
            //this._picOpen()
        });
    }

    _cardDelete() {
        this._element.closest('.element').remove();
    }

    _cardLike() {
        this._element.querySelector('.element__like').classList.toggle('element__like_black');
    }

    _picOpen() {
        const pic = document.querySelector('.popup__img-card');
        const popupTitlePic = document.querySelector('.popup__title-pic');
        const picPopup = document.querySelector('.popup_img');
        pic.src = this._image;
        pic.alt = this._caption;
        popupTitlePic.textContent = this._caption;
        //openPopup(picPopup);
    }
}



    