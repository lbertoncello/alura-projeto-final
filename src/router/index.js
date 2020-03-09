import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    meta: {
      title: 'HOME - Projeto final',
    },
    title: 'Início',
    showOnMenu: true,
    id: '#',
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: 'ABOUT - Projeto final',
    },
    showOnMenu: false,
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import(/* webpackChunkName: "about" */ '../views/Sobre.vue'),
    meta: {
      title: 'SOBRE - Projeto final',
    },
    title: 'Sobre',
    showOnMenu: true,
    id: 'sobre',
  },
  {
    path: '/palestrantes',
    name: 'Palestrantes',
    component: () => import(/* webpackChunkName: "about" */ '../views/Palestrantes.vue'),
    meta: {
      title: 'PALESTRANTES - Projeto final',
    },
    title: 'Palestrantes',
    showOnMenu: true,
    id: 'palestrantes',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
