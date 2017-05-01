<template>
  <CalculateCard :header="calcObject.header" :title="calcObject.title" :description="calcObject.description">
    <div slot="formula">
      $$
      f(r) =
      \begin{cases}
      r - \frac {r^3} {b},r \leq \frac {3A} {2} \\
      A,r > \frac {3A} {2}  \\
      \end{cases}
      ,
      b = \frac {27} {4} {A^2_i}
      $$
    </div>
    <mu-card-text slot="input">
      <mu-text-field label="顶板厚度 h" type="number" labelFloat/>
      <mu-text-field label="弯矩设计值 M" type="number" labelFloat/>
    </mu-card-text>
    <mu-card-text slot="output">
      <mu-text-field label="受压区钢筋面积 A" type="number" labelFloat disabled/>
      <mu-text-field label="受压区钢筋面积 As" type="number" labelFloat disabled/>
    </mu-card-text>
  </CalculateCard>
</template>

<script>
  import CalculateCard from '../components/CalculateCard.vue'
  let calcObject = {
    header: {
      title: '配筋计算过程',
      subTitle: "核心公式展示"
    },
    title: '顶板计算',
    description: '在下列输入框中输入所需参数，参数仅限数值类型。',
  };
  export default {
    name: 'bar-top',
    data () {
      return {
        calcObject
      }
    },
    components:{
      CalculateCard
    }
  }
</script>
