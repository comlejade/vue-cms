import VueRouter from 'vue-router'

import App from './App.vue'
import Home from './components/tabbar/HomeContainer.vue'
import Member from './components/tabbar/MemberContainer.vue'
import Cart from './components/tabbar/CartContainer.vue'
import Search from './components/tabbar/SearchContainer.vue'


var router = new VueRouter({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    {path: '/member', component: Member},
    {path: '/cart', component: Cart},
    {path: '/search', component: Search}
  ],
  linkActiveClass: 'mui-active'
})


export default router