import Controller from '../interfaces/controller.interface'
import express from 'express'
import bcrypt from 'bcrypt'
require('dotenv').config()

class AuthenticationController implements Controller {
   public path = "/auth"
   public router =  express.Router()
   public saltRounds = 10;

    constructor() {
        this.initializeRoutes()
    }

    public initializeRoutes() {
        this.router.post(`${this.path}`, this.createHash)
    }

    private createHash = (req: express.Request, res: express.Response) => {
        const plainText = req.body.password || 'sup4s3cr3t'
        const hashedPassword = bcrypt.hash(plainText, this.saltRounds, function(err: any, hash: any) {
            if(err) {
                res.send(err)
            } else {
                res.send(hash)
            }
        })


    }
}

export default AuthenticationController