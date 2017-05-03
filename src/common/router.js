import indexPage from '../pages/index.vue'
import barTop from '../pages/bar-top/bar-top.vue'
import barBottom from '../pages/bar-bottom/bar-bottom.vue'
import barSide from '../pages/bar-side/bar-side.vue'

export default {
  routes: [
    {
      path: '/', 
      name: 'index',
      component: indexPage
    },
    {
      path: '/bar-top',
      name: 'bar-top',
      component: barTop
    },
    {
      path: '/bar-bottom',
      name: 'bar-bottom',
      component: barBottom
    },
    {
      path: '/bar-side',
      name: 'bar-side',
      component: barSide
    },
    {
      path: '/load-top',
      name: 'load-top',
      component: barTop
    },
    {
      path: '/load-bottom',
      name: 'load-bottom',
      component: barTop
    },
    {
      path: '/load-side',
      name: 'load-side',
      component: barBottom
    },
    {
      path: '*',
      redirect: { name: 'index' }
    }
  ]
}