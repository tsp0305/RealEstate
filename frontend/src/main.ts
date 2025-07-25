import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import { userStore } from '@/stores/userStore'


const app = createApp(App)
app.use(createPinia())
app.use(router)

const auth = userStore()
auth.initializeAuth()

app.mount('#app')
