import Controller from "../interfaces/controller.interface"
import express from 'express'
import postModel from '../models/post.model'
import Post from '../interfaces/post.interface'

class PostController implements Controller {
  public path = '/posts'
  public router = express.Router()
  private post = postModel

  constructor() {
    this.initializeRoutes()
  }

  public initializeRoutes(){
    this.router.get(this.path, this.getAllPosts)
    this.router.post(this.path, this.createPost)
  }

  private getAllPosts = (req: express.Request, res: express.Response) => {
    this.post.find(function(results, err){
      if(err){
        res.send(err)
      } else {
        res.send(results)
      }
    })
  }

  private createPost =  (req: express.Request, res: express.Response) => {
    const newPost: Post = {
      summary: req.body.summary,
      body: req.body.body,
      createdOn: new Date(),
      plauditUser: 'test-1'
    }
    this.post.create(newPost)
      .then(results => {
        res.send(results)
      })    
      .catch(err => {
        res.send(err)
      })
  }
}

export default PostController