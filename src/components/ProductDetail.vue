<template>
  <div id="example-1">
    <div class="ui-swiper-demo">
      <div v-swipe="swipeInit" class="ui-swiper-container">
        <div class="ui-swiper">
          <div class="ui-swiper-box" v-for="item in list">
            <img class="ui-swiper-filter" :src="item.smallImg" :data-src="item.img" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="product_properties">
      <p>名称:{{ca.desc}}</p>
      <p>价格:{{ca.finalPrice?ca.finalPrice:ca.priceCap}}</p>
      <p>序列号:{{ca.sku}}</p>
      <p>尺寸:{{ca.size}}</p>
      <p>颜色:{{ca.color}}</p>
      <p>官网链接:<span v-on:click="onLinkClick(ca.url)">{{ca.url}}</span></p>
    </div>
    <div class="product_desc" v-for="(item, index) in list">
      <img class="" :src="item.img" :data-src="item.img" alt="">
    </div>
  </div>
</template>
<script>
  import swipeDirective from 'vue-ui-swipe'; // 引入slider组件
  import '../../node_modules/vue-ui-swipe/lib/ui-swiper.css';
  import httpUtil from '../httpUtil';
  import router from '../router/index';

  export default {
    name: 'productdetail',
    data() {
      return {
        list: [],
        ca: '',
        swipeInit: {
          delay: 3500,
          autoPlay: false,
        },
      };
    },
    directives: {
      swipe: swipeDirective,
    },
//    components: {
//      Flickity,
//    },
    created() {
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
//      this.fetchData();
    },
    methods: {
      fetchData() {
        console.log(`params : ${this.$route.params.ca.description}`);
        this.ca = this.$route.params.ca;
        for (let i = 0; i < this.$route.params.ca.images.length; i += 1) {
          const img = this.$route.params.ca.images[i];
          console.log(img);
          this.list.push({ img: img.imageUrl, smallImg: img.imageUrl });
        }
      },
      onLinkClick(url) {
//        document.location = url;
      },
    },
    mounted() {
      this.fetchData();
    },
  };
</script>
