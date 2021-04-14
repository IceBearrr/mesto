export default class Section {
    constructor({renderer, containerSelector}) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItem(element) {
        this._container.prepend(element);
    }

    renderItems(items) {
        console.log("рисуем еще раз");
        items.forEach(item => {
            this.addItem(this._renderer(item));
        });
    }
}