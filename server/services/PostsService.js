import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const _model = new Schema({
  imgUrl: { type: String, required: true },
  caption: { type: String, maxlength: 120 },
  likeCount: { type: Number, default: 0 },
  user: { type: ObjectId, ref: "User", required: true }
}, { timestamps: true })

export default class PostsService {
  get repository() {
    return mongoose.model('Posts', _model)
  }
}