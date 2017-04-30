<template>
  <div class="container" id="app">
    <HeaderNav @toggleOpen="toggleOpen" :sideOpen="sideOpen"></HeaderNav>
    <SideNav @toggleOpen="toggleOpen" :open="sideOpen" :mdMobile="mdMobile"></SideNav>
    <Contents :sideOpen="sideOpen"></Contents>
  </div>
</template>

<script>
  import HeaderNav from './components/HeaderNav.vue';
  import SideNav from './components/SideNav.vue';
  import Contents from './components/Contents.vue';

  export default {
    name: 'app',
    data () {
      let vm = this;
      let mdlMobile = window.matchMedia("screen and (max-width: 799px)");
      mdlMobile.addListener(function(mdl){
        vm.sideOpen = !mdl.matches;
        vm.mdMobile = mdl.matches;
      });
      return {
        sideOpen: !mdlMobile.matches,
        mdMobile: mdlMobile.matches
      }
    },
    methods: {
      toggleOpen () {
        this.sideOpen = !this.sideOpen;
      }
    },
    components:{
      HeaderNav,
      SideNav,
      Contents
    }
  }
</script>

