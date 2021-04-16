export default class Card {
    constructor({
                    _id,
                    name,
                    link,
                    likes,
                    myId,
                    own,
                    api,
                    cardSelector,
                    handleCardClick,
                    openCardDelete,
                    handleFormUpdate
                }) {
        this.id = _id; //айди карточки
        this._caption = name;
        this._image = link;
        this._sumLike = likes.length;
        this._myId = myId;
        this._iLiked = false;

        console.log(" myId" + this.id);


        for (let key in likes) {

            if (likes[key]["_id"] === myId) {
                this._iLiked = true;
            }

        }


        this._own = own;
        this._api = api;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleDeleteCard = openCardDelete
        //this._deletePopup = document.querySelector('.popup_remove');
        this._handleFormUpdate = handleFormUpdate;
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


        this._element.setAttribute("id", this.id);
        this._element.dataset.id = this.id;


        this._setEventListeners();
        this._elementImage = this._element.querySelector('.element__image')
        this._elementImage.src = this._image;
        this._elementImage.alt = this._caption;
        this._element.querySelector('.element__place-name').textContent = this._caption;
        this._element.querySelector('.element__like-sum').textContent = this._sumLike;
        if (!this._own) this._element.querySelector('.element__remove').remove(); //я ли сделал
        if (this._iLiked) this._element.querySelector('.element__like-btn').classList.toggle('element__like-btn_black');

        return this._element;
    }

    _setEventListeners() {
        this.id = this._element.dataset.id;

        this._element.querySelector('.element__remove').addEventListener('click', () => {
            this._elementRemove = this._element;

            //this._handleDeleteCard.open.bind(this);
            this._handleDeleteCard.open(this._api, this.id, this.cardDelete);
        });
        this._element.querySelector('.element__like-btn').addEventListener('click', () => {
            this._cardLike()
        });
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._handleCardClick();

        });

        // this._deletePopup.querySelector('.popup__remove-btn').addEventListener('click', () => {
        //     //if (this._elementRemove) {
        //         this._handleDeleteCard.close();
        //         this._api.deleteCard(this._id,  this._handleFormUpdate);
        //         console.log("this._id " + this._id);
        //     //}
        //
        // })
    }

    cardDelete = () => {
        this._elementRemove.remove();
    }


    cardUpdateLike(sumLike) { // обновляем отображение кол-ва лайков и сердечка после нажатия лайки
        //this._element.querySelector('.element__like-sum').textContent = this._sumLike;
        this._element.querySelector('.element__like-sum').textContent = sumLike;
        this._element.querySelector('.element__like-btn').classList.toggle('element__like-btn_black');
    }

    _cardLike() {

        //if this._likes.includes("efbafaddf4831a0e48100782"); //есть ли я вписке лайкнущих?
        if (this._iLiked) {
            console.log("dislike");
            //this._sumLike--;
            const cardUpdateLike = this.cardUpdateLike.bind(this);
            this._api.deleteLike(this.id, cardUpdateLike)
            this._iLiked = false;

        } else {
            console.log("like");
            console.log("like");
            //this._sumLike++;
            //this._cardUpdateLike();
            const cardUpdateLike = this.cardUpdateLike.bind(this);
            this._api.putLike(this.id, cardUpdateLike)
            this._iLiked = true;
            // .then(() => {
            //     this._iLiked = false;
            // })

        }
    }
}



    