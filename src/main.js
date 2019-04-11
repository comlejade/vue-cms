import Vue from 'vue'
import App from './App.vue'

import { Header } from 'mint-ui'

Vue.component(Header.name, Header)

new Vue({
  el: '#root',
  render: c => c(App)
})