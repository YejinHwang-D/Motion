import { BaseComponent } from '../component.js';

export class VideoComponent extends BaseComponent<HTMLElement>{
    constructor(title: string, url: string) {
        super(`<section class="video">
        <div class="video_holder">
            <iframe class="video_thumbnail"></iframe>
        </div>
        <h2 class="video_title"></h2>
        </section>`);

        const videoElement = this.element.querySelector('.video_thumbnail')! as HTMLIFrameElement;
        videoElement.src = this.convertToEmbeddedURL(url);;

        const titleElement = this.element.querySelector('.video_title')! as HTMLParagraphElement;
        titleElement.textContent = title;
    }

    private convertToEmbeddedURL(url: string): string {
        const id = url.split("=");
        return `https://www.youtube.com/embed/${id[1]}`;
    }
}