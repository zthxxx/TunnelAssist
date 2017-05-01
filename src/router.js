import indexPage from './pages/index.vue'
import barTop from './pages/bar-top.vue'
import barBottom from './pages/bar-bottom.vue'

export default {
  routes: [
    {
      path: '/', 
      name: 'index',
      component: indexPage
    },
    {
      path: '/reinforcing-bar-top',
      name: 'bar-top',
      component: barTop
    },
    {
      path: '/reinforcing-bar-bottom',
      name: 'bar-bottom',
      component: barBottom
    },
    {
      path: '*',
      redirect: { name: 'index' }
    }
  ]
}
