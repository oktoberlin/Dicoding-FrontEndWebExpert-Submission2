import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';
import './components/nav-bar';
import './components/hero-element';
import './components/headline';
import './components/daftar-restoran';
import './components/footer';
import postResto from './components/latest';
import App from './views/app';
//  Menampilkan Daftar Restoran
postResto();

const app = new App({
    button: document.querySelector('#menu'),
    drawer: document.querySelector('#drawer'),
    content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});