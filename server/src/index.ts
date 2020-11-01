import App from './app';
import PlauditUserController from './controllers/plauditUser.controller'
import mongoose from 'mongoose'
import validateEnv from './utils/validateEnv'
import PostController from './controllers/post.controller';

validateEnv()


const app = new App(
  [
    new PlauditUserController(),
    new PostController()
  ]
);

app.listen();