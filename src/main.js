import Vue from 'vue'
import App from './App.vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css' // 使用 carbon 主题

Vue.use(MuseUI);

new Vue({
  el: '#app',
  render: function(f){return f(App);}
});
