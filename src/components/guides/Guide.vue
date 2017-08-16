<template>
  <div>
    <div class="guide_bg_top"></div>
    <div class="guide_bg">
      <div class="guide_header">
        <img src="../../assets/subtask_nav_img.png"/>
        <p>攻略</p>
      </div>
      <div class="guide_main">
        <p>Hi 恭喜您加入这次激动人心的“旅程”！</p>
        <br>
        <p>享受旅行是一件美妙的事，</p>
        <p>更美妙的是，你竟然可以利用时间空间的便利，</p>
        <p>顺手带回一件别人珍视的东西，</p>
        <p>赚到一笔可观的旅费，</p>
        <p>用来体验这个广阔精彩的世界！</p>
        <br>
        <p>那么，快来一起看看怎样赚到这笔旅费吧。</p>
        <br>
        <p>跟着JoJo攻略一步步完成任务，您将最终收入至少1000元以上的奖金 （收入：JoJo最终支付给您的奖金-您购买宝贝的费用）
          每完成一步，您就会看到相应奖金累积到您的JoJo钱包里，任务完成就能收到全额奖金！</p>
        <br>
        <p>为了帮助您轻松完成任务，</p>
        <p>JoJo也贴心准备了私人微信客服和个人定制化攻略指引，</p>
        <br>
        <p>以下是你的任务一览，预祝顺利！</p>
        <img src="../../assets/guide_line.jpg"/>
        <p>第一步：成功接单后，上传相关文件，通过身份验证</p>
        <img src="../../assets/guide_main_01.jpg"/>

        <p>第二步：根据JoJo提供的攻略购买宝贝，过程中上传APP提示的相关图片</p>
        <img src="../../assets/guide_main_02.jpg"/>

        <p>第三步: 填写收货地址用于收取JoJo准备的包装盒</p>
        <img src="../../assets/guide_main_03.jpg"/>

        <p>第四步：到机场按JoJo攻略进行退税，过程中上传APP提示的相关图片</p>
        <img src="../../assets/guide_main_04.jpg"/>

        <p>第五步：成功回国过关后上传状态</p>
        <img src="../../assets/guide_main_05.jpg"/>

        <p>第六步：回国将宝贝寄给买家后，上传APP提示的相关图片</p>
        <img src="../../assets/guide_main_06.jpg"/>

        <img src="../../assets/guide_line.jpg"/> 
        <p>准备好了吗？</p>
        <p>那么现在，我们启航吧！</p>
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
      // 此时 data 已经被 observed 了
      this.fetchData();
    },
    methods: {
      fetchData() {
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
