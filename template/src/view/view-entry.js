import Vue from 'vue';
import router from './view-router';
import App from './view-app';
import UI from '~components/index'; // 开发模式
// import UI from '../dist/index'; // 测试打包出来的index.js是否运行正常

Vue.use(UI);

/* eslint no-unused-vars: "off" */
const app = new Vue({
  el: '#view',
  router,
  ...App
});
