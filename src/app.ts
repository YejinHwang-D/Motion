import { PageComponent } from './component/Page.js';
import { ImageComponent } from './component/Menu/Image.js';

class App {
    private readonly page: PageComponent;

    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);

        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
        image.attachTo(appRoot, 'beforeend');
    }
}

new App(document.querySelector('.document')! as HTMLElement);