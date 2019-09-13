import express from 'express'
import { Authorize } from '../middleware/authorize'
import PostsService from '../services/PostsService'

let _postsService = new PostsService().repository

export default class UserDetailsController {

  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .get('', this.getPosts)
      .get('/:id', this.getPostsById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async getPosts(req, res, next) {
    try {
      let data = await _postsService.find({})
      return res.send(data)
    } catch (error) { next(error) }
  }
  async getPostsById(req, res, next) {
    try {
      let data = await _postsService.findById(req.params.id)
      if (data) {
        return res.send(data)
      }
      throw new Error("invalid id")
    } catch (error) { next(error) }
  }
  async create(req, res, next) {
    try {
      req.body.user = req.session.uid
      let data = await _postsService.create(req.body)
      return res.send(data)
    } catch (error) { next(error) }
  }
  async edit(req, res, next) {
    try {
      let data = await _postsService.findOneAndUpdate({ _id: req.params.id, user: req.session.uid }, req.body, { new: true })
        .populate('user', 'name')
      if (data) {
        return res.send(data)
      }
      throw new Error("invalid id")
    } catch (error) { next(error) }
  }
  async  delete(req, res, next) {
    try {
      let data = await _postsService.findOneAndRemove({ _id: req.params.id, user: req.session.uid })
      if (!data) {
        throw new Error("invalid id")
      }
      res.send("deleted value")
    } catch (error) { next(error) }
  }
}