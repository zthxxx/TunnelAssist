import indexPage from '../pages/index.vue'
import barTop from '../pages/bar-top/bar-top.vue'
import barBottom from '../pages/bar-bottom/bar-bottom.vue'
import barSide from '../pages/bar-side/bar-side.vue'
import barMidboard from '../pages/bar-midboard/bar-midboard.vue'
import loadTop from '../pages/load-top/load-top.vue'
import loadBottom from '../pages/load-bottom/load-bottom.vue'
import loadSide from '../pages/load-side/load-side.vue'

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
      path: '/bar-midboard',
      name: 'bar-midboard',
      component: barMidboard
    },
    {
      path: '/load-top',
      name: 'load-top',
      component: loadTop
    },
    {
      path: '/load-bottom',
      name: 'load-bottom',
      component: loadBottom
    },
    {
      path: '/load-side',
      name: 'load-side',
      component: loadSide
    },
    {
      path: '*',
      redirect: { name: 'index' }
    }
  ]
}
