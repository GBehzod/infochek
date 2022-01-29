import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './store';

import './assets/css/main.scss';
import i18n from './i18n';
import 'windi.css';
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'boxicons/css/boxicons.css';
import 'boxicons/css/animations.css';
import 'boxicons/css/transformations.css';

// Vue.use(BootstrapVue);
// Vue.use(IconsPlugin);
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');