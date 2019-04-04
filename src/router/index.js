import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login'
import Layout from '@/view/layout'
import routes from './routes'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login', name: 'login', component: Login },
    { path: '/', name: 'home', component: Layout, children: routes}
  ]
})
