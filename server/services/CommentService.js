import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const _model = new Schema({
  postId: { type: ObjectId, ref: 'Posts', required: true },
  user: { type: ObjectId, ref: 'User', required: true },
  body: { type: String, maxlength: 300 }
}, { timestamps: true })

export default class CommentService {
  get repository() {
    return mongoose.model('Comments', _model)
  }
}