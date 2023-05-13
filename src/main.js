import { createApp } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import '@/assets/styles/index.scss'
import OhVueIcon from '@/plugins/icons'
import App from './App.vue'

createApp(App).component('Vue3Lottie', Vue3Lottie).component('v-icon', OhVueIcon).mount('#app')
