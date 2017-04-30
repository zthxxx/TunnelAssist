import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css' // 使用 carbon 主题


import App from './App.vue'

Vue.use(MuseUI);

new Vue({
  el: '#app',
  render: createElement => createElement(App)
});
