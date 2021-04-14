import Popup from './Popup.js';

export default class PopupDelete extends Popup {
    constructor(popupSelector, deleteFunction) {
        super(popupSelector);
    }

    open(deleteFunction,id, deleteFunctionDom) {
        super.open();
        this._deleteFunction = deleteFunction;
        this._deleteFunctionDom = deleteFunctionDom;

        this.id = id;


    }

    setEventListeners() {
        super.setEventListeners();
        this.popupElement.addEventListener('click', (evt) => {
            evt.preventDefault();

            this._deleteFunction(this.id);
            this._deleteFunctionDom()
            this.close();

        })
    }



}