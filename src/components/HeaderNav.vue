<template>
  <mu-appbar title="Title" :class="{'header-appbar': true, 'nav-hide': !this.sideOpen}" :zDepth="0">
    <mu-icon-button icon="menu" @click="toggleOpen" slot="left"/>
    <mu-icon-button icon="expand_more" slot="right"/>
  </mu-appbar>
</template>

<script>
  export default {
    name: 'HeaderNav',
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
    methods: {
      toggleOpen () {
        this.$emit('toggleOpen');
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../css/_variables"
  .header-appbar
    position: fixed
    left: 256px
    right: 0
    top: 0
    width: auto
    transition: all .45s cubic-bezier(.23,1,.32,1)
    @media mq-mobile
      left: 0

  .nav-hide
    left: 0


</style>
