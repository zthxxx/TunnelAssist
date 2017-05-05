import { Vue, router } from '../util'
import App from '@/App.vue'

describe('App.vue', () => {
  it('App nav title should be 隧道辅助计算', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor({router}).$mount()
    expect(vm.navTitle).to.equal('隧道辅助计算')
  })
})
