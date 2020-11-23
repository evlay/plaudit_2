import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import LoginPage from '../views/LoginPage.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import store from "../store"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  // catch all route due to router history mode. Without this we would not receive 404 page errors
  {
  path: '*',
  name: 'PageNotFound',
  component: PageNotFound
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path:'/register',
    name: 'register',
    component: () => import('../views/RegisterPage.vue')
  },
  // Protected routes
  {
    path: '/posts',
    name: 'posts',
    beforeEnter: function (to, from, next) {
      if(!store.state.currentUser || !localStorage.getItem('currentPlauditUser')) {
        next('/login')
      } else {
        next()
      }
    } ,
    component: () => import('../views/PostsPage.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
