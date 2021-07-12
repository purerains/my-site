import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '@/views/about'
import Home from '@/views/home'
import Blog from '@/views/blog'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
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
  })
  export default router