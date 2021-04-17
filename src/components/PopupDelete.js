import Popup from './Popup.js';

export default class PopupDelete extends Popup {
    constructor(popupSelector, deleteFunction) {
        super(popupSelector);
    }

    open(deleteFunction, id, deleteFunctionDom) {
        super.open();
        this._deleteFunction = deleteFunction;
        this._deleteFunctionDom = deleteFunctionDom;
        this.id = id;
    }

    setEventListeners() {
        super.setEventListeners();

        this.popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            const deleteFunctionDom = this._deleteFunctionDom.bind(this);
            // this._deleteFunction.deleteCard(this.id, deleteFunctionDom);
            // this.close();
            this._deleteFunction.deleteCard(this.id, deleteFunctionDom)
            .then(() => {
                this.close();
            })
            .catch((err) => {
                console.log(err);})
    })
}

}