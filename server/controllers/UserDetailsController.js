import express from 'express'
import { Authorize } from '../middleware/authorize'
import UserDetailsService from '../services/UserDetailsService'

let _userDetailService = new UserDetailsService().repository

export default class UserDetailsController {

  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .get('', this.getUser)
      .get('/:username', this.getProfileByUsername)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async getUser(req, res, next) {
    try {
      let data = await _userDetailService.find({})
      return res.send(data)
    } catch (error) { next(error) }
  }
  async getProfileByUsername(req, res, next) {
    try {
      let profile = await _userDetailService.findOne({ username: req.params.username }).populate("user", "name")
      return res.send(profile)
    } catch (error) { next(error) }
  }
  async create(req, res, next) {
    try {
      req.body.user = req.session.uid
      let data = await _userDetailService.create(req.body)
      res.send(data)
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