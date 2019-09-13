import express from 'express'
import { Authorize } from '../middleware/authorize'
import CommentService from '../services/CommentService'

let _CommentService = new CommentService().repository

export default class CommentController {
  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .get('', this.getAll)
      .get('/:id', this.getCommentsById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await _CommentService.find({})
      return res.send(data)
    } catch (error) {
      next(error)

    }
  }
  async getCommentsById(req, res, next) {
    try {
      let data = await _CommentService.findById(req.params.id)
        .populate("user", "name")
    } catch (error) {
      next(error)

    }

  }
  async create(req, res, next) {
    try {
      req.body.user = req.session.uid
      let data = await _CommentService.create(req.body)
      res.send(data)
    } catch (error) {
      next(error)

    }

  }
  async edit(req, res, next) {
    try {
      let data = await _CommentService.findOneAndUpdate({ _id: req.params.id, user: req.session.uid }, req.body, { new: true })
        .populate('user', 'name')
      if (data) {
        return res.send(data)
      }
      throw new Error("invalid id")
    } catch (error) {
      next(error)
    }

  }
  async delete(req, res, next) {
    try {
      let data = await _CommentService.findOneAndRemove({ _id: req.params.id, user: req.session.uid })
      if (!data) {
        throw new Error("Denied: invalid id")
      }
      res.send("deleted value")
    } catch (error) { next(error) }

  }

}