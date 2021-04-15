export default class UserInfo {
    constructor(profileName, profileNameTemplate, profileDescription, profileDescriptionTemplate) {
        this._profileName = document.querySelector(profileName);
        this._profileNameTemplate  = document.querySelector(profileNameTemplate);
        this._profileDescription = document.querySelector(profileDescription);
        this._profileDescriptionTemplate = document.querySelector(profileDescriptionTemplate);

    }

    // Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя.
    getUserInfo() {
        this._formValues = {};

        //return {
        this._profileNameTemplate.value =
                this._profileName.textContent;
        this._profileDescriptionTemplate.value =
                this._profileDescription.textContent;
            //avatar: this._avatarSelector.textContent,
        //}
    }

    //Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.
    setUserInfo(name, profession, avatar) {
        this._profileName.textContent = name;
        this._profileDescription.textContent = profession;
        this._avatarSelector.textContent = avatar;
    }
}