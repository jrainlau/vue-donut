import Vue from 'vue';
import VueRouter from 'vue-router';
import routeList from '../route-list.js';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: resolve => require(['~pages/index/README.md'], resolve) }
];

routeList.forEach((route) => {
  routes.push({
    path: `/${route}`,
    component: resolve => require([`~pages/${route}/README.md`], resolve)
  });
});

const router = new VueRouter({ routes });

export default router;
