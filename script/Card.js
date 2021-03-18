
export default class Card {
    constructor(name, link, cardSelector) {
        this._caption = name;
        console.log('picname - ' + name);
        console.log('picurl - ' + link);


        this._image = link;

        this._cardSelector = cardSelector;

    }

    _getTemplate() {
            // забираем разметку из HTML и клонируем элемент
              const newCard = document
              .querySelector('.template')
              .content
              .querySelector('.element')
              .cloneNode(true);
              
            // вернём DOM-элемент карточки
              return newCard;
          } 

        generateCard() {
            this._element = this._getTemplate();
            this._setEventListeners();
            this._element.querySelector('.element__image').src = this._image;
            console.log('picurlimg - ' + this._image);

            this._element.querySelector('.element__place-name').textContent = this._caption;

            return this._element;
        }

        _setEventListeners() {
            this._element.querySelector('.element__remove').addEventListener('click', () => {
            this._cardDelete() });
            this._element.querySelector('.element__like').addEventListener('click', () => {
            this._cardLike() });
            this._element.querySelector('.element__image').addEventListener('click', () => {
            this._picOpen() });
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
            popupTitlePic.textContent = this._caption;
            picPopup.classList.add('popup_opened');
           
              }
            }

            