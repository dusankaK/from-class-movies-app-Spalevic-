import Vue from 'vue'
import VueRouter from 'vue-router'
import Movies from '../views/Movies.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import store from './../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      guest:true
    }
  },
  {
    path: '/movies',
    name: 'movies',
    component: Movies
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') //dobre prakse za optimizaciju
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  //TODO :replace later with real implementation
  const isUserLoggedIn = store.getters.isUserAuthenticated;
  if (!to.meta.guest && !isUserLoggedIn ){
    return next({
      name: 'login'
    })
  }
  return next()
})

export default router
