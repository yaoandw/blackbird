import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Strategy from '@/components/Strategy';
import Products from '@/components/Products';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/strategy',
      name: 'Strategy',
      component: Strategy,
    },
    {
      path: '/',
      name: 'Products',
      component: Products,
    },
  ],
});
