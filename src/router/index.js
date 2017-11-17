import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login'
// 异步加载
const HomePanel = (resolve) => require(['@/views/HomePanel'], resolve)
const Articles = (resolve) => require(['@/views/Ariticles'], resolve)
const AddArticle = (resolve) => require(['@/views/AddArticle'], resolve)
const ChangePwd = (resolve) => require(['@/views/ChangePwd'], resolve)
const CommentList = (resolve) => require(['@/views/CommentList'], resolve)

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
  }
]

var router = new Router({
  routes: constantRouterMap
})

var routerLoading = false

export const adminRouterMap = [
  {
    path: '/homepanel',
    name: 'HomePanel',
    component: HomePanel,
    children: [
      {
        path: '/articles',
        name: 'Articles',
        component: Articles
      },
      {
        path: '/addarticle',
        name: 'AddArticle',
        component: AddArticle
      },
      {
        path: '/commentlist',
        name: 'commentlist',
        component: CommentList
      },
      {
        path: '/changepwd',
        name: 'changepwd',
        component: ChangePwd
      }
    ]
  }
]

router.beforeEach((to, from, next) => {
  if (to.path !== '/admin') {
    if (localStorage.getItem('currentUser_token') && localStorage.getItem('isAdmin') === '1') {
      if (!routerLoading) {
        routerLoading = true
        router.addRoutes(adminRouterMap)
        next({path: to.path})
      } else {
        next()
      }
    } else {
      next('/admin')
    }
  } else {
    next()
  }
})

export default router
