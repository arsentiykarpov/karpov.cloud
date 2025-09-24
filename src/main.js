import Vue, { createApp } from 'vue'
import {BootstrapVue, } from 'bootstrap-vue'
import App from './App.vue'
import './app.scss'

Vue.use(BootstrapVue);

new Vue({	render: (h) => h(App),}).$mount('#app')
