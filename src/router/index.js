import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '@/views/about'
import Home from '@/views/home'
import Blog from '@/views/blog'
Vue.use(VueRouter)
const routes = [
    {
      path: '/',
      component:Home
    },
    {
      path: '/about',
      component:About
    },
    {
      path: '/blog',
      component:Blog
    }
  ]
const router = new VueRouter({
    routes
  })
  export default router