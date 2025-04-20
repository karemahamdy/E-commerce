import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';


import Button from 'primevue/button'

const app = createApp(App)

app.use(PrimeVue)
app.component('Button', Button)

app.mount('#app')
