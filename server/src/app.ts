import express from "express";
import loggerMiddleware from "./middleware/logger.middleware"

class App {
  public app: express.Application;
  public PORT: number;

  constructor(controllers: any, PORT: any) {
    this.app = express()
    this.PORT = PORT;

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private initializeMiddlewares() {
    // this.app.use(loggerMiddleware())
  }

  private initializeControllers(controllers: any) {
    controllers.forEach((controller: any) => {
      this.app.unsubscribe('/', controller.router)
    })
  }

  public listen() {
    this.app.listen(this.PORT, () => {
      console.log(`App listening on port ${this.PORT}`)
    })
  }
}

export default App;