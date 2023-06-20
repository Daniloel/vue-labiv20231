import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios';

axios.defaults.baseURL = 'https://8080-daniloel-springlabiv202-479tynsjaoz.ws-us98.gitpod.io/';

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
