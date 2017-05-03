import Vue from 'vue'
import App from './app'
import xx from '../dist/index'

Vue.use(xx)

/* eslint no-unused-vars: "off" */
const app = new Vue({
  el: '#app',
  ...App
})
