import Controller from '../interfaces/controller.interface'
import express from 'express'
// import bcrpyt from 'bcrypt'
require('dotenv').config()

class AuthenticationController implements Controller {
   public path = "/auth"
   public router =  express.Router()

    constructor() {
        this.initializeRoutes()
    }

    public initializeRoutes() {
        this.router.get(`${this.path}`, this.getAuth)
    }

    private getAuth = (req: express.Request, res: express.Response) => {
        // do something
        res.send('is this thing on?')
    }
}

export default AuthenticationController