export default class Api {
    constructor(baseUrl, headers) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }


    getUserInfo() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-22/users/me', {
                headers: {
                    authorization: '31859db2-75be-407c-8c24-8ed9ee09fde1'
                }
            }
        )
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }


    updateProfile(name, about, closeFunction) {
        this._closeFunction = closeFunction;

        return fetch('https://mesto.nomoreparties.co/v1/cohort-22/users/me/', {
                method: 'PATCH',
                headers: {
                    'authorization': '31859db2-75be-407c-8c24-8ed9ee09fde1',
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    name: name,
                    about: about
                })

            }
        )
            .then(res => {
                if (res.ok) {
                    return console.log("res put new card " + res);
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then(() => {
                console.log('this 2 then ${this}' )

                this._closeFunction();

            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            })

    }


    getInitialCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-22/cards', {
                headers: {
                    authorization: '31859db2-75be-407c-8c24-8ed9ee09fde1'
                }
            }
        )
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }


    putNewCard(name, link,closeFunction, updateFunction) {
        this._closeFunction = closeFunction;
        this._updateFunction = updateFunction;


        return fetch('https://mesto.nomoreparties.co/v1/cohort-22/cards', {
                method: 'POST',
                headers: {
                    'authorization': '31859db2-75be-407c-8c24-8ed9ee09fde1',
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    name: name,
                    link: link
                })

            }
        )
            .then(res => {
                console.log('this 1 then  ${this} ' + this);

                if (res.ok) {
                    return console.log('res put new card  ${res.status} ' + res);

                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then(() => {
                console.log('this 2 then ${this}' )

                this._updateFunction();

            })
            .then(() => {
                console.log('this 2 then ${this}' )

                this._closeFunction();

            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            })

    }


    deleteCard(cardId//,  updateFunction
    ) {
        //this._updateFunction = updateFunction;


        return fetch('https://mesto.nomoreparties.co/v1/cohort-22/cards/' + cardId, {
                method: 'DELETE',
                headers: {
                    'authorization': '31859db2-75be-407c-8c24-8ed9ee09fde1',
                    'Content-Type': 'application/json;charset=utf-8'
                },

            }
        )
            .then(res => {
                if (res.ok) {
                    return console.log("res put new card " + res);
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            // .then(() => {
            //     console.log('this 2 then ${this}' )
            //
            //     this._updateFunction();
            //
            // })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            })
    }

    putLike(cardId) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-22/cards/likes/' + cardId, {
                method: 'PUT',
                headers: {
                    'authorization': '31859db2-75be-407c-8c24-8ed9ee09fde1',
                    'Content-Type': 'application/json;charset=utf-8'
                },

            }
        )
            .then(res => {
                if (res.ok) {
                    return console.log("res put new card " + res);
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            })
    }


    deleteLike(cardId) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-22/cards/likes/' + cardId, {
                method: 'DELETE',
                headers: {
                    'authorization': '31859db2-75be-407c-8c24-8ed9ee09fde1',
                    'Content-Type': 'application/json;charset=utf-8'
                },

            }
        )
            .then(res => {
                if (res.ok) {
                    return console.log("res put new card " + res);
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            })
    }


    updateProfilePic({avatar, closeFunction}) {
        this._closeFunction = closeFunction;
        return fetch('https://mesto.nomoreparties.co/v1/cohort-22/users/me/avatar', {
                method: 'PATCH',
                headers: {
                    'authorization': '31859db2-75be-407c-8c24-8ed9ee09fde1',
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    avatar: avatar
                })

            }
        )
            .then(res => {
                if (res.ok) {
                    return console.log("res put new card " + res);
                }
                this._closeFunction();

                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            })
    }


    // другие методы работы с API
}

