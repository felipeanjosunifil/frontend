import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import Header from './components/Header.vue'
import router from './router/Router'

const app = createApp(App)

app.component('Header', Header)
app.use(router)

app.mount('#app')
