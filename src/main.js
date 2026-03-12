import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Header from './components/Header.vue'

import App from './App.vue'
import router from './router/Router'

const app = createApp(App)

app.use(createPinia())
app.component('Header', Header)
app.use(router)

app.mount('#app')
