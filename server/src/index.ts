import App from './app';
import PlauditUserController from './controllers/plauditUser.controller'

const app = new App(
  [
    new PlauditUserController(),
  ],
  5000
);

app.listen();