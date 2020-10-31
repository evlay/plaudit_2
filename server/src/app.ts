import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

class App {
  public app: express.Application

  constructor(controllers: any) {
    this.app = express()

    this.initializeMiddlewares()
    this.initializeControllers(controllers)
    this.connectToDB()
  }

  public listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`App listening on port ${process.env.PORT}`)
    })
  }

  private initializeMiddlewares() {
    // this.app.use(loggerMiddleware())
    this.app.use(express.json())
  }

  private initializeControllers(controllers: any) {
    controllers.forEach((controller: any) => {
      this.app.use('/', controller.router)
    })
  }

  private connectToDB() {
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .catch((err) => console.log(err))
  }
}

export default App
