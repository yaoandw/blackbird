<template>
  <div>
    <div class="guide_bg_top"></div>
    <div class="guide_bg guide_bg_vh">
      <div class="guide_header">
        <img src="../../assets/subtask_nav_img.png"/>
        <p>机场信息</p>
      </div>
      <div class="guide_main white_bg">
        <p>根据客服与您沟通的信息，您将于201x年x月x日前往xxx机场退税</p>
        <p>  航班信息：xxxxx</p>
        <p>  提前多久去：3-4小时</p>
        <p>  参考海关退税单盖章地点：机场二楼</p>
        <p>  参考领现金柜台地址&办公时间: （地图与图示）</p>

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
