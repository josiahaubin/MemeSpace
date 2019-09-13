import express from 'express'
import { Authorize } from '../middleware/authorize'

export default class UserDetailsController {

  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .get('/', this.getUser)
      .get('/:id', this.getUserById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async getUser(req, res, next) {
    try {
      let data = await _UserDetailService.find({}).populate('name')
      return res.send(data)
    } catch (error) { next(error) }
  }
  getUserById(req, res, next) {
    try {

    } catch (error) { next(error) }
  }
  create(req, res, next) {
    try {


    } catch (error) { next(error) }
  }
  edit(req, res, next) {
    try {

    } catch (error) { next(error) }
  }
  delete(req, res, next) {
    try {

    } catch (error) { next(error) }
  }
}