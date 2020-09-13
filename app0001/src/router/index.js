import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'list',
      component:() => import('@/views/List.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('@/views/Create.vue')
    },
    {
      path: '/contact/:id',
      name: 'contact',
      component: () => import('@/views/Contact.vue')
    }
  ]
})


