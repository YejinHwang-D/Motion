import { Composable, PageComponent, PageItemComponent } from './component/Page.js';
import { ImageComponent } from './component/Menu/Image.js';
import { VideoComponent } from './component/Menu/Video.js';
import { NoteComponent } from './component/Menu/Note.js';
import { Component } from './component/component.js';
import { InputDialog } from './dialog/ImageDialog.js';
import { MediaSectionInput } from './dialog/Input/media-input.js';
import { TextSectionInput } from './dialog/Input/text-input.js';

class App {
    private readonly page: Component & Composable;

    constructor(appRoot: HTMLElement, dialogRoot: HTMLElement) {
        this.page = new PageComponent(PageItemComponent);
        // this.page.attachTo(appRoot);

        const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
        imageBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const inputSection = new MediaSectionInput();
            dialog.appendChild(inputSection);
            dialog.attachTo(dialogRoot);

            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                const image = new ImageComponent(inputSection.title, inputSection.url);
                this.page.appendChild(image);
                dialog.removeFrom(dialogRoot);
            });
        });

        const videoBtn = document.querySelector('#new-video')! as HTMLButtonElement;
        videoBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const inputSection = new MediaSectionInput();
            dialog.appendChild(inputSection);
            dialog.attachTo(dialogRoot);

            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                const video = new VideoComponent(inputSection.title, inputSection.url);
                this.page.appendChild(video);
                dialog.removeFrom(dialogRoot);
            });
        });

        const noteBtn = document.querySelector('#new-note')! as HTMLButtonElement;
        noteBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const inputSection = new TextSectionInput();
            dialog.appendChild(inputSection);
            dialog.attachTo(dialogRoot);

            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                const note = new NoteComponent(inputSection.title, inputSection.body);
                this.page.appendChild(note);
                dialog.removeFrom(dialogRoot);
            });
        });

        const todoBtn = document.querySelector('#new-todo')! as HTMLButtonElement;
        todoBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const inputSection = new TextSectionInput();
            dialog.appendChild(inputSection);
            dialog.attachTo(dialogRoot);

            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                const todo = new NoteComponent(inputSection.title, inputSection.body);
                this.page.appendChild(todo);
                dialog.removeFrom(dialogRoot);
            });
        });
    }
}

new App(document.querySelector('.document')! as HTMLElement, document.body);