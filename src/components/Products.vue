<template>
  <div id="example-1">
    <div v-for="(item, index) in post">
      <div v-html="item" v-on:click="onCellClick(index)"></div>
    </div>
  </div>
</template>
<script>
  import httpUtil from '../httpUtil';
  import router from '../router/index';

  export default {
    name: 'products',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        post: [],
        cases: [],
      };
    },
    created() {
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      this.fetchData();
    },
    methods: {
      fetchData() {
//              self.vueObj = this;
        httpUtil.get('cases', (responseData) => {
          console.log(responseData);
          const items = responseData.items;

          this.cases = items;
          this.post = this.processItems(items);
        });
      },
      onCellClick(cellIndex) {
        console.log(`cell ${cellIndex} clicked`);
        const item = this.cases[cellIndex];
        console.log(`push to product: ${item}`);
//        $router.forward('/c/product/'+item.products.id)
        router.push({ name: 'ProductDetail', params: { ca: item } }); // 只有通过name push的情况才能拿到params
      },

      getIcon(ca) {
        let title = ca.description;
        let imageUrl;
        if (ca.images && ca.images.length > 0) {
          imageUrl = ca.images[0].imageUrl;
        }
        let price = ca.finalPrice ? ca.finalPrice : ca.priceCap;
        if (ca.product) {
          imageUrl = ca.product.cover;
          title = ca.product.name;
          price = ca.product.price;
        }
        console.log(`imageUrl: ${imageUrl}`);
        return `<div class="">
                  <div class=""><img style="width: 100%" src="${imageUrl}"></img></div>
                  <span>${title}</span><br>
                  <span>${price}</span>
                </div>`;
      },

      processItems(items) {
        console.log('gghghghgh');
        const aitems = [];
        if (items == null) {
          return aitems;
        }
        for (let i = 0; i < items.length; i += 1) {
          const item = items[i];
          aitems.push(this.getIcon(item));
        }
        return aitems;
      },
    },
  };
</script>
