export default class Card {
    constructor({name, link, cardSelector, handleCardClick}) {
        this._caption = name;
        this._image = link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    }

    getTemplate() {
        const newCard = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return newCard;
    }

    generateCard() {
        this._element = this.getTemplate();
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
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._handleCardClick();
        });
    }

    _cardDelete() {
        this._element.closest('.element').remove();
    }

    _cardLike() {
        this._element.querySelector('.element__like').classList.toggle('element__like_black');
    }
}



    