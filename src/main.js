import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/store.js'


createApp(App).use(router).use(store).mount('#app')
// vue 프로그램이 실행되면 최최 Entry Point 가 된다.