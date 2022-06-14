import { createApp } from 'vue'
import App from './App.vue'

//Use tailwind
import '@/assets/css/tailwind.css'
//Use own css
import '@/assets/css/app.css'

//import router from router/index.js
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')
