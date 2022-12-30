import {
    createApp
} from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'

//Use tailwind
import '@/assets/css/tailwind.css'
//Use own css
import '@/assets/css/app.css'

//import router from router/index.js
import router from './router'

const pinia = createPinia();

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(VueAxios, axios)
app.provide('SERVER_URL', import.meta.env.VITE_SERVER_URL);
app.mount('#app')