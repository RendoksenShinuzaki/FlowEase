import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

