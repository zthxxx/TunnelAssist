<template>
  <div :class="{'content': true, 'nav-hide': !this.sideOpen}">
    <div class="content-wrapper">
      <mu-paper>
        <router-view></router-view>
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

  @media mq-mobile
    .content
      padding-left: 0
    .content-wrapper
      @media mq-mobile
        padding: 24px 12px
</style>
