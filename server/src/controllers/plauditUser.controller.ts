import express from "express"
import PlauditUser from "../interfaces/plauditUser.interface"

class PlauditUserController {
  public path = '/users';
  public router = express.Router();

  private plauditUsers: PlauditUser[] = [
    {
      username: 'first@user.com',
      password: 'supersecret',
      createdOn: '1/1/1969'
    },
    {
      username: 'second@user.com',
      password: 'supasecret',
      createdOn: '1/1/1969'
    }
  ]

  constructor() {
    this.initializeRoutes()
  }

  public initializeRoutes() {
    this.router.get(this.path, this.getAllPlauditUsers)
    this.router.get(this.path + "/:id", this.getOnePlauditUser)
  }

  getAllPlauditUsers = (req: express.Request, res: express.Response) => {
    res.json(this.plauditUsers)
  }

  getOnePlauditUser = (req: express.Request, res: express.Response) => {
    let userId:number = parseInt(req.params.id);
    res.json(this.plauditUsers[1 + userId])
  }
}

export default PlauditUserController;