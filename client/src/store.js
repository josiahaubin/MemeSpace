import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'
import AuthService from './AuthService'

Vue.use(Vuex)

//Allows axios to work locally or live
let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let _api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    posts: [],
    activePost: {},
    userSearchResults: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setPosts(state, posts) {
      state.posts = posts
    },
    setActivePost(state, payload) {
      state.activePost = payload
    },
    setUserSearchResults(state, users) {
      state.userSearchResults = users
    }
  },
  actions: {
    //#region -- AUTH STUFF --
    async register({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Register(creds)
        user.img = `//robohash.org/${user.name}?set=set4`
        commit('setUser', user)
        router.push({ name: "Profile" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async login({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Login(creds)
        user.img = `//robohash.org/${user.name}?set=set4`
        commit('setUser', user)
        router.push({ name: "Profile" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async logout({ commit, dispatch }) {
      try {
        let success = await AuthService.Logout()
        if (!success) { }
        commit('resetState')
        router.push({ name: "login" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    //#endregion

    //#region -- USERS --

    async findUsersByName({ commit, dispatch }, query) {
      try {
        //NOTE the query for this method will be the user name
        let res = await _api.get(`/UserDetails/${query}`)
        commit('setUserSearchResults', res.data)
      } catch (error) {
        console.error(error)
        //TODO handle this catch
      }

    },
    async getProfile({ commit, dispatch }, payload) {
      try {
        let res = await _api.get(`/UserDetails/${payload}`)
        commit('setUser', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async currentUser({ commit, dispatch }, payload) {
      try {
        let res = await _api.get(`/UserDetails/${payload.userId}`)

        commit('setUser', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    // REVIEW Do we keep this or remove it?
    // async editProfile({ commit, dispatch }, payload) {
    //   try {
    //     let res = await _api.put(`/UserDetails/${payload.userId}`, payload.userInfo)
    //     commit('setUser', res.data)
    //   } catch (error) {
    //     console.error(error)
    //   }
    // },
    async createProfile({ commit, dispatch }, payload) {
      try {
        let res = await _api.post(`/UserDetails/`, payload.userInfo)
        commit('setUser', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    //#endregion

    //#region -- POSTS --
    async getPosts({ commit, dispatch }) {
      try {
        let res = await _api.get(`/posts`)
        commit('setPosts', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async addPost({ dispatch }, posts) {
      try {
        let res = await _api.post('/posts', posts)
        dispatch('getPosts')
      } catch (error) {
        console.error(error)

      }
    },
    async getPostById({ commit, dispatch }, posts) {
      try {
        let res = await _api.get(`/posts/${posts.postId}`) //FIXME POSTID
        commit('setActivePost', res.data)

      } catch (error) {
        console.error(error)

      }
    },

    async removePost({ dispatch }, posts) {
      try {
        let res = await _api.delete('/posts/' + posts)
        dispatch('getPosts')
        //NOTE this is coming from the import statement at the top
        router.push({ name: 'post' })
      } catch (error) {
        console.error(error)
      }
    },
    //#endregion


    //#region -- COMMENTS --

    //#endregion

  }
})
