import { BaseComponent } from '../component.js';

export class VideoComponent extends BaseComponent<HTMLElement>{
    constructor(title: string, url: string) {
        super(`<section class="video">
        <div class="video_holder">
            <video controls auto width="300" class="video_thumbnail">
            </video>
        </div>
        <p class="video_title"></p>
        </section>`);

        const videoElement = this.element.querySelector('.video_thumbnail')! as HTMLVideoElement;
        videoElement.src = url;

        const titleElement = this.element.querySelector('.video_title')! as HTMLParagraphElement;
        titleElement.textContent = title;
    }
}