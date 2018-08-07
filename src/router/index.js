import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Mine from '@/pages/mine'
import Search from '@/pages/search'
import Shops from '@/pages/shops'
import Details from '@/pages/details'
import Login from '@/pages/login'
import Main from '@/main/main'
import Register from '@/pages/register'
import Personal from '@/pages/personal'
import store from '../store'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter:(to,from,next)=>{
        store.commit('changeTitle','美团主页')
        store.commit('changeLeft','0')
        next()
      } 
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      beforeEnter:(to,from,next)=>{
        store.commit('changeTitle','我的')
        store.commit('changeLeft','75%')
        next()
      } 
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      beforeEnter:(to,from,next)=>{
        store.commit('changeTitle','搜索')
        store.commit('changeLeft','25%')
        next()
      } 
    },
    {
      path: '/shops',
      name: 'shops',
      component: Shops,
      beforeEnter:(to,from,next)=>{
        store.commit('changeTitle','商家')
        store.commit('changeLeft','50%')
        next()
      } 
    },
     {
        path:'/details/:msg',
        name:"details",
        component:Details,
        beforeEnter:(to,from,next)=>{
          store.commit('changeTitle','食物')
          next()
        } 
      },
      {
        path:'/login',
        name:"login",
        component:Login,
        beforeEnter:(to,from,next)=>{
          store.commit('changeTitle','登录')
          next()
        } 
      },
      {
        path:'/main',
        name:"main",
        component:Main,
        // beforeEnter:(to,from,next)=>{
        //   store.commit('changeTitle','登录注册')
        //   next()
        // } 
      },
      {
        path:'/register',
        name:"register",
        component:Register,
        beforeEnter:(to,from,next)=>{
          store.commit('changeTitle','注册')
          next()
        } 
      },
      {
        path:'/personal',
        name:"personal",
        component:Personal,
        beforeEnter:(to,from,next)=>{
          store.commit('changeTitle','个人资料修改')
          next()
        } 
      },
  ]
})
