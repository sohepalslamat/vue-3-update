import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Doo from './components/Doo'
import Foo from './components/Foo'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/doo', component: Doo },
      { path: '/foo', component: Foo }
    ]
  })
const app = createApp(App)

app.use(router)

router.isReady().then(() => {
    app.mount('#app')
  })