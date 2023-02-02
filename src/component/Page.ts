import { BaseComponent, Component } from './component.js';

export interface Composable {
    appendChild(child: Component): void;
}

export type OnCloseListener = () => void;

// 추후 추가될 다른 컴포넌트 사용을 위해 규격사항을 제시하는 것.
interface SectionContainer extends Component, Composable {
    setOnCloseListener(listener: OnCloseListener): void;
}

type SectionContainerConstructor = {
    new(): SectionContainer;
}

export class PageItemComponent extends BaseComponent<HTMLElement> implements SectionContainer {
    private closeListener?: OnCloseListener;
    constructor() {
        super(`<li class="page_item">
            <section class="pageItem_container">
                <button class="closeBtn">X</button>    
            </section>
        </li>`);
    }

    appendChild(child: Component) {
        const itemElement = this.element.querySelector('.pageItem_container')! as HTMLElement;
        child.attachTo(itemElement);
        const buttonElement = this.element.querySelector('.pageItem_container')! as HTMLElement;
        buttonElement.onclick = () => {
            this.closeListener && this.closeListener();
        };
    }

    setOnCloseListener(listener: OnCloseListener) {
        this.closeListener = listener;
    }
}

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable {
    constructor(private pageItemConstructor: SectionContainerConstructor) {
        super(`<ul class="page"></ul>`);
    }

    appendChild(section: Component) {
        const item = new this.pageItemConstructor();
        item.appendChild(section);
        item.attachTo(this.element, 'beforeend');
        item.setOnCloseListener(() => {
            item.removeFrom(this.element);
        })
    }
}