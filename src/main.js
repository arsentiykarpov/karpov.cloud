import Vue, { createApp } from 'vue'
import {BootstrapVue, } from 'bootstrap-vue'
import './app.scss'
import App from './App.vue'
import CarouselTest from './CarouselTest.vue'

Vue.use(BootstrapVue);

new Vue({	render: (h) => h(App),}).$mount('#app')

//new Vue({render: (h) => h(CarouselTest), }).$mount('#app')
