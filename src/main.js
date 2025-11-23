import './tailwind.css'
import Button from 'primevue/button'
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/tailwind-light/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import router from './router'
import { createPinia } from 'pinia'
import ToastService from 'primevue/toastservice';

const app = createApp(App)
app.use(PrimeVue, { ripple: true })
app.use(router)
app.use(ToastService)

const pinia = createPinia();

app.use(pinia);
app.component('Button', Button)
app.mount('#app')