import Vue from 'vue'
import VueRouter from 'vue-router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css' // 使用 carbon 主题

Vue.use(VueRouter);
Vue.use(MuseUI);

import RouteConfig from './common/router'
const router = new VueRouter(RouteConfig);

import App from './App.vue'

new Vue({
  el: '#app',
  router,
  render: createElement => createElement(App)
});
