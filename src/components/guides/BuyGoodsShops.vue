<template>
  <div>
    <div class="guide_bg_top"></div>
    <div class="guide_bg guide_bg_vh">
      <div class="guide_header">
        <img src="../../assets/subtask_nav_img.png"/>
        <p>推荐购买店铺</p>
      </div>
      <div class="guide_main white_bg">
        <p>你打算哪天从哪里出发进行购买宝贝？客服将与您确认相关细节后完善最优推荐购买路线</p>

      </div>
    </div>
    <div class="guide_bg_bottom"></div>
  </div>
</template>

<script>

  export default {
    name: 'guide',
    data() {
      return {
        msg: 'Welcome to Your Strategy',
      };
    },
    created() {
      // 组件创建完后获取数据，
//      window.scrollTo(0, 0);
    },
    mounted() {
//      console.log('in mounted');
//      window.scrollTo(0, 0);
    },
    methods: {
    },
  };
</script>
