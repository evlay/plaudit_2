import express from 'express'
import PlauditUser from '../interfaces/plauditUser.interface'
import Controller from '../interfaces/controller.interface'
import plauditUserModel from '../models/plauditUser.model'

class PlauditUserController implements Controller {
  public path = '/users'
  public router = express.Router()
  private plauditUser = plauditUserModel

  constructor() {
    this.initializeRoutes()
  }

  public initializeRoutes() {
    this.router.get(this.path, this.getAllPlauditUsers)
    this.router.post(this.path, this.createOnePlauditUser)
    // this.router.get(this.path + "/:id", this.getOnePlauditUser)
  }

  private getAllPlauditUsers = (
    req: express.Request,
    res: express.Response
  ) => {
    this.plauditUser.find().then((plauditUsers) => {
      res.status(200).send(plauditUsers)
    })
  }

  private now = new Date()

  private createOnePlauditUser = (
    req: express.Request,
    res: express.Response
  ) => {
    const newPlauditUser: PlauditUser = {
      username: `test-user-${this.now.getTime()}`,
      password: 'secret',
      createdOn: '2020-10-31',
    }

    this.plauditUser
      .create(newPlauditUser)
      .then(() => {
        console.log('user created')
        res
          .status(200)
          .json('user created with username ' + newPlauditUser.username)
      })
      .catch((err) => {
        res.status(201).json('error!')
      })

    console.log(newPlauditUser)
  }

  private deleteAllTestUsers = (req: Request, res: Response) => {
    // delete all test users by users that have "test-" using regex
  }

  private findOnePlauditUserByid = (
    req: express.Request,
    res: express.Response
  ) => {
    this.plauditUser.findOne
  }
}

export default PlauditUserController
