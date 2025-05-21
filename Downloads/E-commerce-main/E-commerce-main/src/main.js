// import { createApp } from 'vue'
// import './style.css'
import './tailwind.css'
// import App from './App.vue'

// import PrimeVue from 'primevue/config'
// import 'primevue/resources/primevue.min.css';
// import 'primevue/resources/themes/lara-light-blue/theme.css';
// import 'primeicons/primeicons.css';
// import Aura from '@primeuix/themes/aura';
import Button from 'primevue/button'
// import ToastService from 'primevue/toastservice'


// const app = createApp(App);
// app.use(PrimeVue, {
//   theme: {
//     preset: Aura
//   }
// });

// app.use(PrimeVue)
// app.component('Button', Button)
// app.use(ToastService)
// app.mount('#app')


import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/tailwind-light/theme.css' // Tailwind theme
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import router from './router'

const app = createApp(App)
app.use(PrimeVue, { ripple: true })
// app.use(PrimeVue)
app.use(router)
app.component('Button', Button)
app.mount('#app')