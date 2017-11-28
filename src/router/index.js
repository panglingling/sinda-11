import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import server from '../components/server.vue'
import outter from '../components/outter.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/server',
      name: 'server',
      component: server
    },
    {
      path: '/outter',
      name: 'outter',
      component: outter,
      children: [
        {
          path: 'login',
          // name: 'login',
          component: login,
        },
        {
          path: 'register',
          // name: 'login',
          component: register,
        }
      ]
    }
  ]
})
