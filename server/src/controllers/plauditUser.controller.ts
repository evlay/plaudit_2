import express from "express"
import PlauditUser from "../interfaces/plauditUser.interface"

class PlauditUserController {
  public path = '/users';
  public router = express.Router();

  constructor() {
    this.initializeRoutes()
  }

  public initializeRoutes() {
    this.router.get(this.path, this.getAllPlauditUsers)
    this.router.get(this.path + "/:id", this.getOnePlauditUser)
  }

  getAllPlauditUsers = (req: express.Request, res: express.Response) => {
    res.send('all users')
  }

  getOnePlauditUser = (req: express.Request, res: express.Response) => {
    res.send('one user')
  }
}

export default PlauditUserController;