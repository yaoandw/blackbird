// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Meta from 'vue-meta';
import Vuex from 'vuex';
import VueWebBridge from 'vue-bridge-webview';
import App from './App';
import router from './router';
import './assets/css/guide.css';
import '../static/blackbird';

Vue.use(Meta);
Vue.use(Vuex);
Vue.use(VueWebBridge);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
