<template>
  <mu-card-media class="formula">
    <slot>
      暂无公式
    </slot>
  </mu-card-media>
</template>

<script>
  export default {
    name: 'FormulaCard',
    data () {
      return {
      }
    },
    mounted () {
      if (window.MathJax) {
        window.MathJax.Hub.Queue(['Typeset', MathJax.Hub, this.$el])
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../css/_variables"

  .formula
    font-size: 2rem
    font-family: SimSun
    transition: transit-bezier

  @media mq-mobile
    .formula
      font-size: 1.6rem
</style>
