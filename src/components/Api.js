export default class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }


    getUserInfo() {
        return fetch(this._baseUrl + 'users/me', {
                headers: this._headers
            }
        )
            .then(res => {
                return this._checkResponse(res)
            });
    }


    updateProfile(name, description, closeFunction, updateFunction) {
        this._closeFunction = closeFunction;
        this._updateFunction = updateFunction;


        return fetch(this._baseUrl + 'users/me/', {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    name: name,
                    about: description
                })

            }
        )
            .then(res => {
                return this._checkResponse(res)
            })
            .then((res) => {
                console.log('this 2 then ${this}' + res._id);
                const item = {name: name, description: description}
                this._updateFunction(item);

            })
            .then(() => {
                console.log('this 2 then ${this}')

                this._closeFunction();

            })

    }


    getInitialCards() {
        return fetch(this._baseUrl + 'cards', {
                headers: this._headers
            }
        )
            .then(res => {
                return this._checkResponse(res)
            });
    }


    putNewCard(name, link, closeFunction, updateFunction) {
        this._closeFunction = closeFunction;
        this._updateFunction = updateFunction;


        return fetch(this._baseUrl + 'cards', {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify({
                    name: name,
                    link: link
                })

            }
        )
            .then(res => {
                console.log('this 1 then  ${this} ' + this);
                return this._checkResponse(res)
            })
            .then((res) => {
                console.log('this 2 then ${this}' + res._id);
                const item = {_id: res._id, name: name, link: link}
                this._updateFunction(item);

            })
            .then(() => {
                console.log('this 2 then ${this}')

                this._closeFunction();

            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            })

    }


    deleteCard(cardId, deleteFunctionDom
    ) {
        this._deleteFunctionDom = deleteFunctionDom;


        return fetch(this._baseUrl + 'cards/' + cardId, {
                method: 'DELETE',
                headers: this._headers,

            }
        )
            .then(res => {
                return this._checkResponse(res)

            })
            .then(() => {
                console.log('удоли карточку');
                this._deleteFunctionDom();
            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            })
    }

    putLike(cardId, cardUpdateLike) {
        this.cardUpdateLike = cardUpdateLike;
        return fetch(this._baseUrl + 'cards/likes/' + cardId, {
                method: 'PUT',
                headers: this._headers,

            }
        )
            .then(res => {
                console.log("apilike");
                return this._checkResponse(res)
            })
            .then((res) => {
                // обрабатываем результат
                console.log(res);
                this.cardUpdateLike(res.likes.length)

            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            })
    }


    deleteLike(cardId, cardUpdateLike) {
        this.cardUpdateLike = cardUpdateLike;
        return fetch(this._baseUrl + 'cards/likes/' + cardId, {
                method: 'DELETE',
                headers: this._headers,

            }
        )
            .then(res => {
                console.log("apidislike");
                return this._checkResponse(res)
            })
            .then((res) => {
                // обрабатываем результат
                console.log(res);
                this.cardUpdateLike(res.likes.length)

            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            })
    }


    updateProfilePic(foto, closeFunction,updateFunction) {
        this._closeFunction = closeFunction;
        this._updateFunction = updateFunction;
        return fetch(this._baseUrl + 'users/me/avatar', {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    avatar: foto
                })

            }
        )
            .then(res => {
                this._closeFunction();
                return this._checkResponse(res)
            })
            .then((res) => {
                console.log('this 2 then ${this}' + res._id);
                const item = {foto:foto}
                this._updateFunction(item);

            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            })
    }


    // другие методы работы с API
}

