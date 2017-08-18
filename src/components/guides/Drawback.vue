<template>
  <div>
    <div class="guide_bg_top"></div>
    <div class="guide_bg guide_bg_vh">
      <div class="guide_header">
        <img src="../../assets/subtask_nav_img.png"/>
        <p>退税攻略</p>
      </div>
      <div class="guide_main">
        <div class="guide_dir_bg" v-on:click="gotoAirport()"><div class="guide_dir_bg_no">1</div><div class="guide_dir_bg_title">机场信息</div></div>
        <div class="guide_dir_bg" v-on:click="gotoFlow()"><div class="guide_dir_bg_no">2</div><div class="guide_dir_bg_title">退税流程参考</div></div>
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
      // 组件创建完后获取数据，
    },
    methods: {
      gotoAirport() {
        router.push({ name: 'drawbackairport' });
      },
      gotoFlow() {
        router.push({ name: 'drawbackflow' });
      },
    },
  };
</script>

