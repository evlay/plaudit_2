import Controller from "../interfaces/controller.interface";
import express from "express";
import bcrypt from "bcrypt";
import PlauditUser from "../interfaces/plauditUser.interface";
import PlauditUserModel from "../models/plauditUser.model";
require("dotenv").config();

class AuthenticationController implements Controller {
  public path = "/auth";
  public router = express.Router();
  public saltRounds = 10;
  public plauditUser = PlauditUserModel;

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get(`${this.path}/user`, this.getAllPlauditUsers)
    this.router.get(`${this.path}/user/one`, this.getAllPlauditUsers)
    this.router.post(`${this.path}/register`, this.createPlauditUser);
    this.router.post(`${this.path}/register/test`, this.createOneTestPlauditUser);
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

  private createPlauditUser = async (
    req: express.Request,
    res: express.Response
  ) => {
    const password: string = await bcrypt.hash(
      req.body.password,
      this.saltRounds
    );

    const newPlauditUser: PlauditUser = {
      password,
      username: req.body.username,
      createdOn: new Date(),
    };

    // check if user with that username exist before creating 
      await this.plauditUser.findOne({username: newPlauditUser.username}, function(err: any, results: any) { 
        if(err) {
          throw err
        } else {
          if(!results){
            res.send('user created')
          } else {
            res.send('username already exist with that name')
          }
        }
      })
          
    ///////////////////////////////////////////////////////// 
  };

  private createOneTestPlauditUser = async (
    req: express.Request,
    res: express.Response
  ) => {
    const password: string = await bcrypt.hash(
      req.body.password,
      this.saltRounds
    );

    const newPlauditUser: PlauditUser = {
      username: `test-user-${new Date().getTime()}`,
      password,
      createdOn: new Date(),
    };

    this.plauditUser
      .create(newPlauditUser)
      .then(() => {
        res.status(200).json(newPlauditUser);
      })
      .catch((err) => {
        res.status(201).send(err);
      });
  };
}

export default AuthenticationController;
