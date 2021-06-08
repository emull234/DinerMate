import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/post.css';
import '../styles/detail.css';
import '../styles/responsive.css';
import App from './views/App';
import swRegister from './utils/swRegister';

swRegister();
const app = new App({
  button: document.querySelector('#drawer'),
  drawer: document.querySelector('#mobile-navigasi'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
