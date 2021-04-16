export default class UserInfo {
    constructor(profileName, profileNameTemplate, profileDescription, profileDescriptionTemplate, openAvatar) {
        this._profileName = document.querySelector(profileName);
        this._profileNameTemplate = document.querySelector(profileNameTemplate);
        this._profileDescription = document.querySelector(profileDescription);
        this._profileDescriptionTemplate = document.querySelector(profileDescriptionTemplate);
        this._profileFoto = document.querySelector(openAvatar);
    }

    // Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя.
    getUserInfo() {
            this._formValues = {}; 
     
            return { 
                name: this._profileName.textContent, 
                profession: this._profileDescription.textContent, 
                avatar: this._profileFoto.src,
            } 
        }      

    setNewAva(avatar) {
        this._profileFoto.src = avatar;
    }

    //Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.
    setUserInfo(name, description) {
        this._profileName.textContent = name;
        this._profileDescription.textContent = description;
    }
}