import Vue from 'vue'
import Router from 'vue-router'
import Profile from './views/Profile.vue'
import Login from './views/Login.vue'
import SearchUsers from './views/SearchUsers.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/searchUsers',
      name: 'searchUsers',
      component: SearchUsers
    },
    {
      path: "*",
      redirect: '/'
    }
  ]
})