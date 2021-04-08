export default class UserInfo {
    constructor(nameSelector, jobSelector) {
        this._profileName = document.querySelector('.profile__name');
        this._profileDescription = document.querySelector('.profile__description');
    }

    // Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя.
    getUserInfo() {
        this._formValues = {};

        return {
            name: this._profileName.textContent,
            profession: this._profileDescription.textContent,
        }
    }

    //Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу. Белый
    setUserInfo(name, profession) {
        this._profileName.textContent = name;
        this._profileDescription.textContent = profession;

    }
}