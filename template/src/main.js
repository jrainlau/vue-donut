import Vue from 'vue'
import App from './app'
import xx from '~components/index'

Vue.use(xx)

/* eslint no-unused-vars: "off" */
const app = new Vue({
  el: '#app',
  ...App
})
