import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tasks from '../views/Tasks.vue'
import Process from '../views/Process.vue'
// import Processes from '../views/Processes.vue'
import Department from '../views/Department.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'home',
    component: Home
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: Tasks
  },
  {
    path: '/processes',
    name: 'process',
    component: Process
  },
  // {
  //   path: '/processes',
  //   name: 'processes',
  //   component: Processes
  // },
  {
    path: '/processes/:id',
    name: 'department',
    component: Department
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
