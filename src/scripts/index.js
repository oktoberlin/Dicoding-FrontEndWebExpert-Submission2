import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';
import './components/nav-bar';
import './components/hero-element';
import './components/headline';
import './components/daftar-restoran';
import './components/footer';
import postResto from './components/latest';

//  Menampilkan Daftar Restoran
postResto();

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', (event) => {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', () => {
    drawer.classList.remove('open');
});

main.addEventListener('click', () => {
    drawer.classList.remove('open');
});
