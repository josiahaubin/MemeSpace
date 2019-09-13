import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const _model = new Schema({
  name: { type: String, required: true },
  img: { type: String, default: 'robohash.org/d$?set=set4' },
  bio: { type: String, maxlength: 250 },
  user: { type: ObjectId, ref: "User", required: true }

}, { timestamps: true })

export default class UserDetailsService {
  get repository() {
    return mongoose.model('UserDetails', _model)
  }
}