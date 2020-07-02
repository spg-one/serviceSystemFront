import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import InfoManagement from '../components/InfoManagement'
import OrderManagement from '../components/OrderManagement'
import Service from '../components/Service'
import ComplaintManagement from '../components/ComplaintManagement'
import CommentManagement from '../components/CommentManagement'
import Login from '../components/Login'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/InfoManagement',
      component: InfoManagement
    },
    {
      path: '/OrderManagement',
      component: OrderManagement
    },
    {
      path: '/Service',
      component: Service
    },
    {
      path: '/ComplaintManagement',
      component: ComplaintManagement
    },
    {
      path: '/CommentManagement',
      component: CommentManagement
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
