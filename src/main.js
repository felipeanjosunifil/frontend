import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import Header from './components/Header.vue'

const app = createApp(App)

app.use(createPinia())
app.component('Header', Header)

app.mount('#app')
