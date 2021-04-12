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


    updateProfile(name, about) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-22/users/me', {
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
            });
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


    putNewCard(name, link) {
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
                if (res.ok) {
                    return console.log("res put new card " + res);
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }


    deleteCard(cardId) {
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
            });
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
            });
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
            });
    }


    updateProfilePic(avatar) {
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
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }


    // другие методы работы с API
}

