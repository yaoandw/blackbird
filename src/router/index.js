import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Products from '@/components/Products';
import Guide from '@/components/guides/Guide';
import BuyGoods from '@/components/guides/BuyGoods';
import BuyGoodsShops from '@/components/guides/BuyGoodsShops';
import BuyGoodsTax from '@/components/guides/BuyGoodsTax';
import BuyGoodsTips from '@/components/guides/BuyGoodsTips';
import Drawback from '@/components/guides/Drawback';
import DrawbackAirport from '@/components/guides/DrawbackAirport';
import DrawbackFlow from '@/components/guides/DrawbackFlow';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/',
      name: 'Products',
      component: Products,
    },
    {
      path: '/guide',
      name: 'guide',
      component: Guide,
    },
    {
      path: '/guide/buygoods',
      name: 'buygoods',
      component: BuyGoods,
    },
    {
      path: '/guide/buygoods/shops',
      name: 'buygoodsshops',
      component: BuyGoodsShops,
    },
    {
      path: '/guide/buygoods/tax',
      name: 'buygoodstax',
      component: BuyGoodsTax,
    },
    {
      path: '/guide/buygoods/tips',
      name: 'buygoodstips',
      component: BuyGoodsTips,
    },
    {
      path: '/guide/drawback',
      name: 'drawback',
      component: Drawback,
    },
    {
      path: '/guide/drawback/airport',
      name: 'drawbackairport',
      component: DrawbackAirport,
    },
    {
      path: '/guide/drawback/flow',
      name: 'drawbackflow',
      component: DrawbackFlow,
    },
  ],
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});
router.afterEach((route) => {
  window.scrollTo(0, 0);
});

export default router;
