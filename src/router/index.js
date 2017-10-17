import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/BackendPages/Login'
import HomePanel from '@/views/BackendPages/HomePanel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/admin',
      name: 'Login',
      component: Login
    },
    {
      path: '/homepanel',
      name: 'HomePanel',
      component: HomePanel
    }
  ]
})
