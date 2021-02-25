// // // Функция, которая добавляет класс с ошибкой
// // const showInputError = (formElement, inputElement, errorMessage) => {
// //     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
// //     inputElement.classList.add('popup__input_type_error');
// //     errorElement.textContent = errorMessage;
// //     errorElement.classList.add('popup__error_visible');
// //   };
// //
// //
// // // Функция, которая удаляет класс с ошибкой
// // const hideInputError = (formElement, inputElement) => {
// //     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
// //     inputElement.classList.remove('popup__input_type_error');
// //     errorElement.textContent = '';
// //     errorElement.classList.remove('popup__error_visible');
// //   };
// //
// //
// //   // Функция, которая проверяет валидность поля
// // const isValid = (formElement, inputElement) => {
// //   if (!inputElement.validity.valid) {
// //     showInputError(formElement, inputElement, inputElement.validationMessage);
// //   } else {
// //     hideInputError(formElement, inputElement);
// //   }
// // };
// //
// //
// // const setEventListeners = (formElement) => {
// //
// //     const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
// //
// //
// //     const buttonElement = formElement.querySelector('.popup__button');
// //     toggleButtonState(inputList, buttonElement);
// //
// //     inputList.forEach((inputElement) => {
// //         inputElement.addEventListener("input", () => {
// //             isValid(formElement, inputElement);
// //             toggleButtonState(inputList, buttonElement);
// //         })
// //     })
// //   };
// //
// //   const  enableValidation = () => {
// //     const formList = Array.from(document.querySelectorAll('.popup__form'));
// //
// //     formList.forEach((formElement) => {
// //         formElement.addEventListener('submit', (evt) => {
// //             evt.preventDefault();
// //         })
// //       setEventListeners(formElement);
// //     })
// //   };
// //
//
//
//
//
//
//
//
//
// function hasInvalidInput(inputList) {
//     return inputList.some((inputElement) => {
//         return !inputElement.validity.valid;
//     })
// };
//
// function toggleButtonState(inputList, buttonElement, options) {
//     if(hasInvalidInput(inputList)) {
//         buttonElement.setAttribute('disabled', true);
//         buttonElement.classList.add(options.inactiveButtonClass);
//     }
// };
//
//   // включение валидации вызовом enableValidation
// // все настройки передаются при вызове
//
// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });


// Функция принимает массив полей

console.log("начинаем");

//
//
//
//
//
// const showInputError = (formElement, inputElement, errorMessage) => {
//     // Находим элемент ошибки внутри самой функции
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     // Остальной код такой же
//     inputElement.classList.add('form__input_type_error');
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add('form__input-error_active');
// };
//
// const hideInputError = (formElement, inputElement) => {
//     // Находим элемент ошибки
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     // Остальной код такой же
//     inputElement.classList.remove('form__input_type_error');
//     errorElement.classList.remove('form__input-error_active');
//     errorElement.textContent = '';
// };
//
//
//
// const isValid = (formElement, inputElement) => {
//     if (!inputElement.validity.valid) {
//         // showInputError теперь получает параметром форму, в которой
//         // находится проверяемое поле, и само это поле
//         showInputError(formElement, inputElement, inputElement.validationMessage);
//     } else {
//         // hideInputError теперь получает параметром форму, в которой
//         // находится проверяемое поле, и само это поле
//         hideInputError(formElement, inputElement);
//     }
// };
//
//
//
//
// const hasInvalidInput = (inputList) => {
//     console.log("идем по инпутам");
//
//     // проходим по этому массиву методом some
//     return inputList.some((inputElement) => {
//
//         console.log("тру или труп " + inputElement.validity.valid);
//
//         // Если поле не валидно, колбэк вернёт true
//         // Обход массива прекратится и вся фунцкция
//         // hasInvalidInput вернёт true
//
//         return !inputElement.validity.valid;
//     })
// };
//
//
//
// // Функция принимает массив полей ввода
// // и элемент кнопки, состояние которой нужно менять
//
// const toggleButtonState = (inputList, buttonElement) => {
//     console.log("кнопка");
//
//     // Если есть хотя бы один невалидный инпут
//     if (hasInvalidInput(inputList)) {
//         console.log("deactive");
//         // сделай кнопку неактивной
//         buttonElement.classList.add('form__submit_inactive');
//     } else {
//         // иначе сделай кнопку активной
//         buttonElement.classList.remove('form__submit_inactive');
//         console.log("active");
//
//     }
// };
//
//
//
//
// const setEventListeners = (formElement) => {
//     console.log("ищем инпуты");
//
//     // Найдём все поля формы и сделаем из них массив
//     const inputList = Array.from(formElement.querySelectorAll(`.popup__input`));
//     // Найдём в текущей форме кнопку отправки
//     const buttonElement = formElement.querySelector('.popup__close');
//
//     // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
//     //toggleButtonState(inputList, buttonElement);
//
//
//     inputList.forEach((inputElement) => {
//         inputElement.addEventListener('input', () => {
//             isValid(formElement, inputElement);
//
//             // Вызовем toggleButtonState и передадим ей массив полей и кнопку
//             toggleButtonState(inputList, buttonElement);
//         });
//     });
// };
//
//
// formElement = document.querySelector('.popup__form');
//
// setEventListeners(formElement);

















const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__input-error_active');
    errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
        console.log("ошибка");

    } else {
        hideInputError(formElement, inputElement);
        console.log("неошибка");

    }
};



const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {

        return !inputElement.validity.valid;
    })
}

const toggleButtonState = (inputList, buttonElement) => {

    if (hasInvalidInput(inputList)) {

        buttonElement.classList.add('button_inactive');
        console.log("активно");

    } else {
        // иначе сделай кнопку активной
        console.log("пассивно");
        buttonElement.classList.remove('button_inactive');
    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.form__submit');
    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
        //cлушатель для формы
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        //слушатели для филдсетов
        const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
        fieldsetList.forEach((fieldset) => {
            setEventListeners(fieldset);
        });
    });
};
enableValidation();