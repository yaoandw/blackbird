<template>
  <div>
    <div class="guide_bg_top"></div>
    <div class="guide_bg guide_bg_vh">
      <div class="guide_header">
        <img src="../../assets/subtask_nav_img.png"/>
        <p>购买攻略</p>
      </div>
      <div class="guide_main">
        <div class="guide_dir_bg" v-on:click="gotoProduct()"><div class="guide_dir_bg_no">1</div><div class="guide_dir_bg_title">您要购买的商品详情</div></div>
        <div class="guide_dir_bg" v-on:click="gotoShops()"><div class="guide_dir_bg_no">2</div><div class="guide_dir_bg_title">建议购买地</div></div>
        <div class="guide_dir_bg" v-on:click="gotoTips()"><div class="guide_dir_bg_no">3</div><div class="guide_dir_bg_title">购买时自查注意事项</div></div>
        <div class="guide_dir_bg" v-on:click="gotoTax()"><div class="guide_dir_bg_no">4</div><div class="guide_dir_bg_title">税单填写</div></div>
      </div>
    </div>
    <div class="guide_bg_bottom"></div>
  </div>
</template>

<script>
  import router from '../../router/index';

  export default {
    name: 'guide',
    data() {
      return {
        msg: 'Welcome to Your Strategy',
      };
    },
    created() {
//      window.scrollTo(0, 0);
    },
    methods: {
      gotoProduct() {
// js 调用 android/ios 获取用户信息
        this.$bridge.callHandler('gotoTaskProduct', {}, (data) => {
          // 相关业务操作
        });
      },
      gotoShops() {
        router.push({ name: 'buygoodsshops' });
      },
      gotoTips() {
        router.push({ name: 'buygoodstips' });
      },
      gotoTax() {
        router.push({ name: 'buygoodstax' });
      },
    },
  };
</script>
