import Vue from 'vue';
import App from './App.vue';
import Index from './views/index.vue';
import Goods from './views/goods.vue';
import Cart from './views/cart.vue';

import VueAwesomeSwiper from 'vue-awesome-swiper';
import VueRouter from 'vue-router';
import Element from 'element-ui';
import 'swiper/dist/css/swiper.css';

Vue.use(VueRouter);
Vue.use(Element);
Vue.use(VueAwesomeSwiper);

const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', component: Index },
  { path: '/goods', component: Goods },
  { path: '/cart', component: Cart }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})