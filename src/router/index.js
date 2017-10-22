import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/BackendPages/Login'
import HomePanel from '@/views/BackendPages/HomePanel'

Vue.use(Router)

export const constantRouterMap = [
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

var router = new Router({
  routes: constantRouterMap
})

// export const adminRouterMap = [
//   {
//     path: '/homepanel',
//     name: 'HomePanel',
//     component: HomePanel
//   }
// ]

router.beforeEach((to, from, next) => {
  if (localStorage.getItem('currentUser_token')) {
    if (to.path === '/homepanel') {
      // router.addRoutes(adminRouterMap)
      console.log(router)
      next()
    }
  } else {
    next()
  }
})

export default router
