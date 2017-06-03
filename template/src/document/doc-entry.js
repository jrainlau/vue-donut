import Vue from 'vue';
import Doc from './doc-app';
import router from './doc-router';
import 'highlight.js/styles/atom-one-light.css';
import '~static/less/reset.less';

/* eslint no-unused-vars: "off" */
const app = new Vue({
  el: '#app',
  router,
  ...Doc
});
