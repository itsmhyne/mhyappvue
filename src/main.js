import { createApp } from 'vue'
import App from './App.vue'

// import bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min'

// import router
import router from './router'

const app = createApp(App)

// use router
app.use(router)
app.mount('#app')

// createApp(App).mount('#app')
