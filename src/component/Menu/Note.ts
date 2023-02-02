import { BaseComponent } from '../component.js';

export class NoteComponent extends BaseComponent<HTMLElement> {
    constructor(title: string, body: string) {
        super(`
        <section class="note">
        <div class="note_holder">
            <h2 class="note_title"></h2>
            <p class="note_body"></p>
        </div>
        </section>
        `);

        const noteElement = this.element.querySelector('.note_title')! as HTMLElement;
        noteElement.textContent = title;

        const noteBodyElement = this.element.querySelector('.note_body')! as HTMLElement;
        noteBodyElement.textContent = body;
    }
}