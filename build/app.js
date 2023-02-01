import { PageComponent } from './component/Page.js';
import { ImageComponent } from './component/Menu/Image.js';
import { VideoComponent } from './component/Menu/Video.js';
import { NoteComponent } from './component/Menu/Note.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
        image.attachTo(appRoot, 'beforeend');
        const video = new VideoComponent('Video Title', 'https://www.youtube.com/watch?v=0gY_z7fqPjs');
        video.attachTo(appRoot, 'beforeend');
        const note = new NoteComponent('Note Title', 'Note Body');
        note.attachTo(appRoot, 'beforeend');
        const todo = new NoteComponent('Todo Title', 'Todo Body');
        todo.attachTo(appRoot, 'beforeend');
    }
}
new App(document.querySelector('.document'));
