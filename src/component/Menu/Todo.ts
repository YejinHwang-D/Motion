import { BaseComponent } from '../component.js';

export class TodoComponent extends BaseComponent<HTMLElement> {
    constructor(title: string, body: string) {
        super(`
        <section class="todo">
        <div class="todo_holder">
            <h2 class="todo_title"></h2>
            <input type="checkbox" class="todo_body">
        </div>
        </section>
        `);

        const todoElement = this.element.querySelector('.todo_title')! as HTMLElement;
        todoElement.textContent = title;

        const todoBodyElement = this.element.querySelector('.todo_body')! as HTMLElement;
        todoBodyElement.textContent = body;
    }
}