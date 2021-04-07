export default class UserInfo {
    constructor(//nameInputSelector, jobInputSelector
    ) {
        // this._nameInputSelector = document.querySelector(nameInputSelector);
        // this._jobInputSelector = document.querySelector(jobInputSelector);

        this._profileName = document.querySelector('.profile__name');
        this._profileDescription = document.querySelector('.profile__description');
    }

    // Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя.
    // getUserInfo() {
    //     this._inputList = this._element.querySelectorAll('.popup__input');
    //     this._formValues = {};
    //     this._inputList.forEach(input => {
    //         this._formValues[input.name] = this._nameInputSelector.value;
    //         this._formValues[input.job] = this._jobInputSelector.value;
    //     });
    //
    //     //return this._formValues; Белый
    //
    //
    //     return {
    //         name: this._profileName.textContent,
    //         profession: this._profileDescription.textContent,
    //     }
    //
    //
    // }

    //Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу. Белый
    setUserInfo(name, profession) {
        // const profileName = document.querySelector('.profile__name');
        // const profileDescription = document.querySelector('.profile__description');
        // profileName.textContent = this._nameInputSelector;
        // profileDescription.textContent = this._jobInputSelector;

        this._profileName.textContent = name;
        this._profileDescription.textContent = profession;

    }
}