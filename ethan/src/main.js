import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Timer from './components/Time.vue'
createApp(App).use(router).mount('#app')
createApp(Timer).mount('#timer')