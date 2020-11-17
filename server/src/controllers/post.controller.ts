import Controller from '../interfaces/controller.interface'
import express from 'express'
import postModel from '../models/post.model'
import Post from '../interfaces/post.interface'
import CreatePostDto from '../dto/createPost.dto'
import { IsString, validate } from 'class-validator'
import { NextFunction } from 'express'
import { plainToClass } from 'class-transformer'
import 'reflect-metadata'

class PostController implements Controller {
  public path = '/posts'
  public router = express.Router()
  private post = postModel

  constructor() {
    this.initializeRoutes()
  }

  public initializeRoutes() {
    this.router.get(this.path, this.getAllPosts)
    this.router.post(this.path, this.createPost)
    this.router.get(`${this.path}/:id`, this.getPostById)
    this.router.patch(`${this.path}/:id`, this.updatePostById)
    this.router.delete(`${this.path}/:id`, this.deleteUserById)
  }

  private getAllPosts = (req: express.Request, res: express.Response) => {
    this.post.find(function (results, err) {
      if (err) {
        res.send(err)
      } else {
        res.send(results)
      }
    })
  }

  private getPostById = async (
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ) => {
    const id = req.params.id
    this.post
      .findById(id)
      .then((post) => {
        res.send(post)
      })
      .catch((error) => {
        res.status(404).send('no user found with that id')
      })
  }

  private createPost = (req: express.Request, res: express.Response) => {
    const newPost: CreatePostDto = {
      summary: req.body.summary,
      body: req.body.body,
      username: req.body.username,
    }

    validate(plainToClass(CreatePostDto, newPost)).then((errors) => {
      if (errors.length > 0) {
        res.json({
          errors,
        })
      } else {
        this.post
          .create(newPost)
          .then((results) => {
            res.send(results)
          })
          .catch((err) => {
            res.status(400).send('No user created: ' + err)
            console.log('error: ' + err)
          })
      }
    })
  }

  private updatePostById = (req: express.Request, res: express.Response) => {
    this.post
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((results) => {
        res.send(results)
      })
      .catch((err) => {
        res.status(400).send('No user with that id found')
        console.log('error: ' + err)
      })
  }

  private deleteUserById = (req: express.Request, res: express.Response) => {
    this.post
      .findOneAndDelete({ _id: req.params.id })
      .then((results) => {
        res.send(results)
      })
      .catch((err) => {
        res.status(400).send('No user with that id found')
        console.log('error: ' + err)
      })
  }
}

export default PostController
