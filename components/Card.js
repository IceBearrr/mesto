import PopupWithImage from '../components/PopupWithImage.js'

export default class Card {
    constructor(name, link, cardSelector) {
        this._caption = name;
        this._image = link;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const newCard = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return newCard;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element__image = this._element.querySelector('.element__image')
        this._element__image.src = this._image;
        this._element__image.alt = this._caption;
        this._element.querySelector('.element__place-name').textContent = this._caption;

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.element__remove').addEventListener('click', () => {
            this._cardDelete()
        });

        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._cardLike()
        });

        const picOpen = new PopupWithImage('.popup_img', this._caption, this._image)
        this._element.querySelector('.element__image').addEventListener('click', function () {
            picOpen.open()
        });
    }

    _cardDelete() {
        this._element.closest('.element').remove();
    }

    _cardLike() {
        this._element.querySelector('.element__like').classList.toggle('element__like_black');
    }
}



    