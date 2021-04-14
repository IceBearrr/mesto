export default class UserInfo {
    constructor(nameSelector, jobSelector, avatarSelector) {
        this._profileName = document.querySelector('.profile__name');
        this._profileDescription = document.querySelector('.profile__description');
        this._nameSelector = nameSelector;
        this._jobSelector = jobSelector;
        this._avatarSelector = avatarSelector;
    }

    // Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя.
    getUserInfo() {
        this._formValues = {};

        return {
            name: this._profileName.textContent,
            profession: this._profileDescription.textContent,
            avatar: this._avatarSelector.textContent,
        }
    }

    //Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.
    setUserInfo(name, profession, avatar) {
        this._profileName.textContent = name;
        this._profileDescription.textContent = profession;
        this._avatarSelector.textContent = avatar;
    }
}