export default class Section {
    constructor({renderer, containerSelector}) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItem(element) {
        this._container.prepend(element);
    }

    clear() {
        this._container.innerHTML = '';
    }

    renderItems(items) {
        console.log("items " + items.name);

        items.forEach(item => {
            console.log("item " + item.name);
            this.addItem(this._renderer(item));
        });
    }
}