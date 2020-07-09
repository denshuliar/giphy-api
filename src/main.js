import Vue from 'vue'
import App from './App.vue'
var infiniteScroll = require('vue-infinite-scroll');
Vue.use(infiniteScroll);

new Vue({
    el: '#app',
    render: h => h(App)
})