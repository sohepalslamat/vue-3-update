import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Doo from './components/Doo'
import Foo from './components/Foo'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/doo', component: Doo },
    { path: '/foo', component: Foo }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
