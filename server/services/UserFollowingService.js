import mongoose, { modelNames } from "mongoose"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let _schema = new Schema({
  follower: { type: ObjectId, ref: "User", required: true },
  following: { type: ObjectId, ref: "User", required: true }
}, { timestamps: true })

export default class UserFollowingService {
  get repository() {
    return mongoose.model("UserFollowing", _schema)
  }
}