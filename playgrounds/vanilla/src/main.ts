import '@arc-web/components/themes/index.css';
import '@arc-web/components/src/components/container/arc-container';
import ArcContainer from '@arc-web/components/components/container/ArcContainer';

const app = document.querySelector('app-root')!;
const container = document.createElement('arc-container') as ArcContainer;
const navbar = document.createElement('arc-navbar');
const bottombar = document.createElement('arc-bottombar');

navbar.slot = 'nav';
navbar.notificationHistory = true;
bottombar.slot = 'bottom';
bottombar.notificationHistory = true;
container.appendChild(navbar);
container.appendChild(bottombar);

app.appendChild(container);

container.dispatchNotification({
  title: 'Hello, World!',
  message: 'This is a test notification.',
  type: 'info',
});
