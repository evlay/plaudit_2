import express from 'express'
import PlauditUser from '../interfaces/plauditUser.interface'
import Controller from '../interfaces/controller.interface'
import plauditUserModel from '../models/plauditUser.model'
import { Response } from 'express'

class PlauditUserController implements Controller {
  public path = '/users'
  public router = express.Router()
  private plauditUser = plauditUserModel

  constructor() {
    this.initializeRoutes()
  }

  public initializeRoutes() {
    this.router.get(this.path, this.getAllPlauditUsers)
    this.router.get(`${this.path}/one`, this.getAllPlauditUsers)
    this.router.post(this.path, this.createOnePlauditUser)
    this.router.post(`${this.path}/test`, this.createOneTestPlauditUser)
    this.router.delete(`${this.path}/test`, this.deleteAllTestUsers)
  }

  private getAllPlauditUsers = (
    req: express.Request,
    res: express.Response
  ) => {
      this.plauditUser.find().then((plauditUsers) => {
        res.status(200).send(plauditUsers)
      })
    }

  private findOnePlauditUserById = (
    req: express.Request,
    res: express.Response
  ) => {
    this.plauditUser.findOne(
      {
        username: req.body.username,
      },
      function (err: any, results: any) {
        if (err) {
          res.send(err)
        } else {
          res.send(results)
        }
      }
    )
  }

  private createOnePlauditUser = (
    req: express.Request,
    res: express.Response
  ) => {
    const newPlauditUser: PlauditUser = {
      username: req.body.username,
      password: req.body.password,
      createdOn: new Date(),
    }

    this.plauditUser
      .create(newPlauditUser)
      .then(() => {
        res
          .status(200)
          .json(newPlauditUser)
      })
      .catch((err) => {
        res.status(201).send(err)
      })
  }

  private createOneTestPlauditUser = (
    req: express.Request,
    res: express.Response
  ) => {
    const newPlauditUser: PlauditUser = {
      username: `test-user-${new Date().getTime()}`,
      password: 'secret',
      createdOn: new Date(),
    }

    this.plauditUser
      .create(newPlauditUser)
      .then(() => {
        res
          .status(200)
          .json(newPlauditUser)
      })
      .catch((err) => {
        res.status(201).send(err)
      })
  }

  private deleteAllTestUsers = (
    req: express.Request,
    res: express.Response
  ) => {
    // delete all test users by users that have "test-" using regex
    this.plauditUser
      .deleteMany({ username: new RegExp('test-') })
      .then((results) => {
        res.send(results)
      })
      .catch((err) => {
        res.send(err)
      })
  }
}

export default PlauditUserController
