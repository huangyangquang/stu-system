import Vue from 'vue'
import VueRouter from 'vue-router'

import stuList from '@/views/stuList'
import addStu from '@/views/addStu'


Vue.use(VueRouter)

const routes = [
  {
  	path: '/stuList',
  	name: 'stuList',
  	component: stuList
  },
  {
  	path: '/addStu',
  	name: 'addStu',
  	component: addStu
  },
  {
  	path: '*',
  	redirect: "/stuList"
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkExactActiveClass: 'active'
})

export default router
