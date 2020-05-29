import Vue from 'vue';
import store from "./store";
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';

Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
