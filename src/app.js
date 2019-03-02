import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter);
const app = new Vue({
    el: '#examApp',
    template: '<router-view></router-view>',
    router: new VueRouter({ routes })
})