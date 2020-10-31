import App from './app';
import PlauditUserController from './controllers/plauditUser.controller'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const app = new App(
  [
    new PlauditUserController(),
  ],
  5000
);

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, )
  .catch(err => console.log(err))

app.listen();