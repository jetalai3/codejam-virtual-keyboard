import './assets/css/reset.css';
import './assets/css/styles.css';

import App from './application/components/app';

window.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.start();
});
