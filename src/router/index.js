import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Guide from '@/components/guides/Guide';
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
      path: '/guide',
      name: 'guide',
      component: Guide,
    },
    {
      path: '/',
      name: 'Products',
      component: Products,
    },
  ],
});
