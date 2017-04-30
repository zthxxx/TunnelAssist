<template>
  <div :class="{'content': true, 'nav-hide': !this.sideOpen}">
    <div class="content-wrapper">
      <mu-paper>
        <mu-sub-header>阳光</mu-sub-header>
        <mu-content-block>
          散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
        </mu-content-block>
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
    transition: all .45s cubic-bezier(.23,1,.32,1)
    @media mq-mobile
      padding-left: 0

  .content-wrapper
    padding: 48px 72px

  .nav-hide
    padding-left: 0


</style>
