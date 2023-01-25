import { Header } from './component/header.js';

class App {
    constructor() {
        console.log('App!');
        new Header();
    }
}

new App();
// new App(document.querySelector('.App'));