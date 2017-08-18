<template>
  <div>
    <div class="guide_bg_top"></div>
    <div class="guide_bg guide_bg_vh">
      <div class="guide_header">
        <img src="../../assets/subtask_nav_img.png"/>
        <p>购买注意事项</p>
      </div>
      <div class="guide_main white_bg">
        <p>购买前：</p>
        <ul>
          <li>可出示包款的网站链接+询问货号是否正确</li>
          <li>可询问店员您选中的宝贝是否正确，序列号正确检查包身是否有明显瑕疵</li>
        </ul>

        <img src="../../assets/guide_line.jpg"/>
        <p>付款时：</p>
        <ul>
          <li>检查店员给的小票+发票上的货号/序列号是否正确</li>
          <li>拍摄商品正面图+小票+店家票据上传给客服审核，这样既确保您的购买正确，也为预防后面退税失败留下重要的照片存档，进行双重保险。</li>
        </ul>

        <img src="../../assets/guide_line.jpg"/>
        <p>离店前：</p>
        <ul>
          <li>自查拿好商品，小票，店家票据，退税单</li>
          <li>拍照片上传存档给JoJo审核</li>
        </ul>

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
