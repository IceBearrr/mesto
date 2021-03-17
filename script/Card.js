
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
            // this._element.querySelector('.element__image').addEventListener('click', () => {
            // this._picOpen() });
          }

        _cardDelete() {
           this._element.closest('.element').remove();
        }
        
        _cardLike() {
            this._element.querySelector('.element__like').classList.toggle('element__like_black');
        }
        
        // _picOpen() {
        //     popupTitlePic.textContent = item.name
        //     pic.setAttribute("src", item.link);
        //     openPopup(picPopup);
        // }
        
        // picPopup.addEventListener('click', function () {
        //     closePopup(picPopup)
        // });
        

        }


        // function createCard(item) {
        //     const card = new Card(link, name, '.template');
        //     return card.generateCard();
             
        //    }
           

    // //initialCards.forEach((item) => {
    // initialCards.forEach((item) => {
    //     createCard(item);
        
    //     // Создадим экземпляр карточки
    //     //const card = new Card(item.text, item.image);
    //     // Создаём карточку и возвращаем наружу
    //     const cardElement = createCard(item);
    
    //     // Добавляем в DOM
    //     document.body.append(cardElement);
    // }); 

   