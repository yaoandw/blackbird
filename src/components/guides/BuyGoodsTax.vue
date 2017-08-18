<template>
  <div>
    <div class="guide_bg_top"></div>
    <div class="guide_bg">
      <div class="guide_header">
        <img src="../../assets/subtask_nav_img.png"/>
        <p>税单填写</p>
      </div>
      <div class="guide_main white_bg">
        <p>我们为你准备了Global Blue税单模板，如果您拿到的税单与模板不一样请直接参照后面的中英文对照进行填写。</p>
        <p>请您在购买时，一定向店员索要并按要求填写好退税单，这将关系到退税的成功与否。</p>
        <img src="../../assets/guide_line.jpg"/>
        <p>模板</p>
        <img src="../../assets/subtask_example_tax.jpg"/>
        <img src="../../assets/guide_line.jpg"/> 
        <p>中英文对照</p>
        <p>1.Full Name/全名 – 用拼音写</p>
        <p>2.Passport Number/护照号 – 在护照照片页的右上角</p>
        <p>3.Permnant Address (not in the EU) /在中国的家庭住址–这里用英文格式填写在中国的详细住址。 (如：No.XX, XXRoad, Beijing, China)</p>
        <p>4.Arrival date/到达日期–到达目的地国的日期，如果曾往返多次，写最近的一次。(格式：日/月/年)</p>
        <p>5.Departuredate/离境日期–离开英国的日期，格式同上</p>
        <p>6.Final destination/最终目的地– 填写飞机的目的地国家，一般是China</p>
        <p>7.Refund options/退税选项 – 有的表格有这个选项，有的没有。想退现金就选cash refund那项，或者到柜台时告诉工作人员你要退cash。</p>
        <p>8.signature/签名– 这项很重要，一定要确保和退税人护照上的签名一致。"</p>
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
