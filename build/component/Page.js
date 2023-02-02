import { BaseComponent } from './component.js';
export class PageItemComponent extends BaseComponent {
    constructor() {
        super(`<li class="page_item">
            <section class="pageItem_container">
                <button class="closeBtn">X</button>    
            </section>
        </li>`);
    }
    appendChild(child) {
        const itemElement = this.element.querySelector('.pageItem_container');
        child.attachTo(itemElement);
        const buttonElement = this.element.querySelector('.pageItem_container');
        buttonElement.onclick = () => {
            this.closeListener && this.closeListener();
        };
    }
    setOnCloseListener(listener) {
        this.closeListener = listener;
    }
}
export class PageComponent extends BaseComponent {
    constructor(pageItemConstructor) {
        super(`<ul class="page"></ul>`);
        this.pageItemConstructor = pageItemConstructor;
    }
    appendChild(section) {
        const item = new this.pageItemConstructor();
        item.appendChild(section);
        item.attachTo(this.element, 'beforeend');
        item.setOnCloseListener(() => {
            item.removeFrom(this.element);
        });
    }
}
