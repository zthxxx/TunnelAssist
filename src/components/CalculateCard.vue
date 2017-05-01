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
    <mu-card-text>
      <mu-text-field
        v-for="input of params.inputs"
        :label="input.label"
        v-model="input.value"
        :key="input.label"
        type="number"
        labelFloat
      ></mu-text-field>
    </mu-card-text>
    <mu-card-actions>
      <mu-raised-button label="计算输出" class="calc-button" @click="tiggerCalc" secondary/>
    </mu-card-actions>
    <mu-card-title  :title="outTitle"/>
    <mu-card-text>
      <mu-text-field
        v-for="output of params.outputs"
        :label="output.label"
        v-model="output.value"
        :key="output.label"
        type="number"
        labelFloat
        disabled
      ></mu-text-field>
    </mu-card-text>
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
      params: {
        type: Object,
        default: {inputs:[], outputs:[]}
      }
    },
    data () {
      return {
      }
    },
    components:{
      FormulaCard
    },
    methods : {
      tiggerCalc () {
        this.$emit('calculate');
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .calc-button
    min-width: 200px
  .text-field
    margin: 0 12px
</style>
