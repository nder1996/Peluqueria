import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Contactanos',
    name: 'Contactanos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contactanos.vue')
  },
   {
    path: '/Servicios',
    name: 'Servicios',
    component: () => import(/* webpackChunkName: "about" */ '../views/Servicios.vue')
  },
    {
    path: '/Nosotros',
    name: 'Nosotros',
    component: () => import(/* webpackChunkName: "about" */ '../views/Nosotros.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
