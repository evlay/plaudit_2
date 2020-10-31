import App from './app';
import PlauditUserController from './controllers/plauditUser.controller'
import mongoose from 'mongoose'
import validateEnv from './utils/validateEnv'

validateEnv()


const app = new App(
  [
    new PlauditUserController(),
  ]
);

app.listen();