import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path:'/404',
    name: "Error",
    component: () => import('../views/Error.vue')
  }
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
