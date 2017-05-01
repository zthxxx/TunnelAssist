<template>
  <mu-card>
    <mu-card-header :title="header.title" :subTitle="header.subTitle">
    </mu-card-header>
    <FormulaCard>
      <slot name="formula"></slot>
    </FormulaCard>
    <mu-card-title  :title="title" :subTitle="subTitle"/>
    <mu-card-text>
      {{description}}
    </mu-card-text>
    <slot name="input" class="text-field"></slot>
    <mu-card-actions>
      <mu-raised-button label="计算输出" class="calc-button" secondary/>
    </mu-card-actions>
    <mu-card-title  :title="outTitle"/>
    <slot name="output"></slot>
  </mu-card>
</template>

<script>
  import FormulaCard from './FormulaCard.vue'
  export default {
    name: 'CalculateCard',
    props: {
      header: {
        type: Object,
        default: {
          title: '',
          subTitle: ''
        }
      },
      title: {
        type: String,
        default: 'Title'
      },
      subTitle: {
        type: String,
        default: '参数输入'
      },
      description: {
        type: String,
        default: '输入所需参数'
      },
      outTitle: {
        type: String,
        default: '输出结果'
      },
    },
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
  .calc-button
    min-width: 200px
  .text-field
    margin: 0 12px
</style>
