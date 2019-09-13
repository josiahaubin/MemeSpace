import express from 'express'
import { Authorize } from '../middleware/authorize'
import PostsService from '../services/PostsService'

let _postsService = new PostsService().repository

export default class UserDetailsController {

  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .get('', this.getPosts)
      .get('/:username', this.getPostsByUsername)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  getPosts() {

  }
  getPostsByUsername() {

  }
  create() {

  }
  edit() {

  }
  delete() {

  }
}