<template>
  <mu-card>
    <mu-card-header title="配筋计算过程" subTitle="核心公式展示">
    </mu-card-header>
    <FormulaCard>
      $$
        f(r) =
        \begin{cases}
        r,r \leq A \\
        A-α(r-A),A < r \leq \frac {1+α} {α} A \\
        0,r \geq \frac {1+α} {α} A  \\
        \end{cases}
        ,
        \text{ (α 为限幅深度控制参数)}
      $$
    </FormulaCard>
    <mu-card-title title="顶板计算" subTitle="参数输入"/>
    <mu-card-text>
      需要输入 顶板厚度 弯矩设计值等
      <div>
        <mu-text-field label="顶板厚度 h" class="text-field" type="number" labelFloat/>
        <mu-text-field label="弯矩设计值 M" class="text-field" type="number" labelFloat/>
      </div>
    </mu-card-text>
    <mu-card-actions>
      <mu-raised-button label="计算" secondary/>
    </mu-card-actions>
    <mu-card-text>
      <mu-text-field label="受压区钢筋面积 A" class="text-field" type="number" labelFloat disabled/>
      <mu-text-field label="受压区钢筋面积 As" class="text-field" type="number" labelFloat disabled/>
    </mu-card-text>
  </mu-card>
</template>

<script>
  import FormulaCard from '../components/FormulaCard.vue'
  export default {
    name: 'bar-bottom',
    data () {
      return {
      }
    },
    components:{
      FormulaCard
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .text-field
    margin: 0 12px
</style>
