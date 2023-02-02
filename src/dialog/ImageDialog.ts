import { BaseComponent, Component } from '../component/component.js';
import { Composable } from '../component/Page.js';

type OnCloseListener = () => void;
type OnSubmitListener = () => void;

export class InputDialog extends BaseComponent<HTMLElement> implements Composable {
    private closeListener?: OnCloseListener;
    private submitListener?: OnSubmitListener;

    constructor() {
        super(`
        <dialog class="dialog">
        <div class="dialog_container">
            <button class="dialog_close">&times;</button>
            <div class="dialog_body"></div>
            <button class="dialog_submit">ADD</button>
        </div>
        </dialog>
        `);

        const closeBtn = this.element.querySelector('.dialog_close')! as HTMLElement;
        closeBtn.onclick = () => {
            this.closeListener && this.closeListener();
        }
        const submitBtn = this.element.querySelector('.dialog_submit')! as HTMLElement;
        submitBtn.onclick = () => {
            this.submitListener && this.submitListener();
        }
    }

    setOnCloseListener(listener: OnCloseListener) {
        this.closeListener = listener;
    }
    setOnSubmitListener(listener: OnSubmitListener) {
        this.submitListener = listener;
    }

    appendChild(child: Component) {
        const body = this.element.querySelector('.dialog_body')! as HTMLElement;
        child.attachTo(body);
    }
}