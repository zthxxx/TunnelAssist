<template>
  <div :class="{'content': true, 'nav-hide': !this.sideOpen}">
    <div class="content-wrapper">
      <mu-paper>
        <mu-card>
          <mu-card-header title="配筋计算过程" subTitle="核心公式展示">
          </mu-card-header>
          <mu-card-media class="formula">
            $$
            \eta = \frac {1} {1 - \frac {KN} {10 \alpha E_c I_0} H^2}
            $$

            $$
            \alpha = \frac {0.12} {0.3 + \frac {e_0} {h}} + 0.17
            \text{ (当$\frac {e_0} {h} $时，取$\alpha=0.26$ )}
            $$
          </mu-card-media>
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
      </mu-paper>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Content',
    props: {
      sideOpen: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
      }
    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../css/_variables"
  .content
    padding-top: 64px
    padding-left: 256px
    width: auto
    transition: transit-bezier

  .content-wrapper
    padding: 48px 72px
    transition: transit-bezier

  .nav-hide
    padding-left: 0

  .formula
    font-size: 2.5rem
    font-family: SimSun
    transition: transit-bezier

  @media mq-mobile
    .content
      padding-left: 0
    .content-wrapper
      @media mq-mobile
        padding: 24px 12px
    .formula
      font-size: 2rem

  .text-field
    margin: 0 12px
</style>
