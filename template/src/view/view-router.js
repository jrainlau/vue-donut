import Vue from 'vue';
import VueRouter from 'vue-router';
import routeList from '../route-list.js';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: resolve => require(['~pages/index'], resolve) },
  { path: '*', component: resolve => require(['~pages/index'], resolve) },
];

routeList.forEach((route) => {
  routes.splice(1, 0, {
    path: `/${route}`,
    component: resolve => require([`~pages/${route}/index`], resolve)
  });
});

const router = new VueRouter({ routes });

export default router;
