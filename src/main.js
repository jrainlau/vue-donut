import Vue from 'vue'
import App from './app'
import xx from '../dist/index'

Vue.use(xx)

new Vue({
  el: '#app',
  ...App
})
