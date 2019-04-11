import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { Header } from 'mint-ui'
import './lib/css/mui.css'
import './lib/css/icons-extra.css'

import router from './router'

Vue.component(Header.name, Header)

new Vue({
  el: '#root',
  render: c => c(App),
  router
})