import './bootstrap';
import { createApp } from 'vue/dist/vue.esm-bundler.js';
import HomeComponent from './components/Home.vue'

const app = createApp({})

app.component('home-component',HomeComponent)

app.mount('#app')
