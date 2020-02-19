import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'reset-css';

Vue.config.productionTip = false;

const DEFAULT_TITLE = 'Projeto final';
router.afterEach((to) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
