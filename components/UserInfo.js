// const nameInput = document.querySelector('.popup__input_enter_name');
// const jobInput = document.querySelector('.popup__input_enter_description');

//Принимает в конструктор объект с селекторами двух элементов: 
// элемента имени пользователя и элемента информации о себе.



export default class UserInfo{
    constructor({nameInputSelector,jobInputSelector}) {
        this._nameInputSelector = nameInputSelector;
        this._jobInputSelector = jobInputSelector;
    }
   // Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. 
   //Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
    getUserInfo() {
            // достаём все элементы полей
            this._inputList = this._element.querySelectorAll('.popup__input');
          
            // создаём пустой объект
            this._formValues = {};
          
            // добавляем в этот объект значения всех полей
            this._inputList.forEach(input => {
                this._formValues[input.name] = nameInput.value;
                this._formValues[input.job] = jobInput.value;

              //this._formValues[input.name] = input.value;
            });
          
            // возвращаем объект значений
            return this._formValues;
          } 
    
    
    //Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.
    setUserInfo(evt){
        evt.preventDefault();
            profileName.textContent = nameInput.value;
            profileDescription.textContent = jobInput.value;
            closePopup(popupEdit);
        }
        // const formUser = document.querySelector('.popup__container_edit');
        // formUser.addEventListener('submit', setUserInfo);
}

        
        

// function saveEditPopup(evt) {
//     evt.preventDefault();
//     profileName.textContent = nameInput.value;
//     profileDescription.textContent = jobInput.value;
//     closePopup(popupEdit);
// }

// formUser.addEventListener('submit', saveEditPopup);


