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
    userSearchResults: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setPosts(state, posts) {
      state.posts = posts
    },
    setUserSearchResults(state, users) {
      state.userSearchResults = users
    }
    // setProfile(state, payload) {
    //   state.
    // }
  },
  actions: {
    //#region -- AUTH STUFF --
    async register({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Register(creds)
        commit('setUser', user)
        router.push({ name: "Profile" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async login({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Login(creds)
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
        let res = await _api.get('UserDetails/find?username=' + query)
        commit('setUserSearchResults', res.data)
      } catch (error) {
        console.error(error)
        //TODO handle this catch
      }

    },
    async getProfile({ commit, dispatch }, payload) {
      try {
        debugger
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
    async editProfile({ commit, dispatch }, payload) {
      try {
        let res = await _api.put(`/UserDetails/${payload.userId}`, payload.userInfo)
        // commit('setUser', res.data)
      } catch (error) {
        console.error(error)
      }
    },
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
    }
    //#endregion


    //#region -- COMMENTS --

    //#endregion
  }
})
