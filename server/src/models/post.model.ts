import mongoose from 'mongoose'
import Post from '../interfaces/post.interface'

const postSchema = new mongoose.Schema({
  body: String,
  username: String,
  createdOn: String,
  upvotes: Number
})

const postModel = mongoose.model<Post & mongoose.Document>('Post', postSchema)

export default postModel