export default class UserInfo {
    constructor({nameInputSelector, jobInputSelector}) {
        this._nameInputSelector = nameInputSelector;
        this._jobInputSelector = jobInputSelector;
    }

    // Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя.
    getUserInfo() {
        this._inputList = this._element.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = nameInput.value;
            this._formValues[input.job] = jobInput.value;
        });

        return this._formValues;
    }

    //Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.
    setUserInfo() {
        const profileName = document.querySelector('.profile__name');
        const profileDescription = document.querySelector('.profile__description');
        profileName.textContent = this._nameInputSelector;
        profileDescription.textContent = this._jobInputSelector;
    }
}