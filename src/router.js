import Vue from 'vue'
import Router from 'vue-router'
import Msite from './views/Msite/Msite.vue'
import Search from './views/Search/Search.vue'
import Order from './views/Order/Order.vue'
import Profile from './views/Profile/Profile.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/profile',
      component: Profile
    }
  ]
})
