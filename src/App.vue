<template>
  <div class="container" id="app">
    <HeaderNav @toggleOpen="toggleOpen" :sideOpen="sideOpen" :title="headerTitle"></HeaderNav>
    <SideNav
      @toggleOpen="toggleOpen"
      @navChange="navChange"
      :nav="nav"
      :navTitle="navTitle"
      :open="sideOpen"
      :mdMobile="mdMobile"
    ></SideNav>
    <Contents :sideOpen="sideOpen"></Contents>
  </div>
</template>

<script>
  import HeaderNav from './components/HeaderNav.vue';
  import SideNav from './components/SideNav.vue';
  import Contents from './components/Contents.vue';
  import nav from './common/nav'

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
        nav,
        navTitle: "隧道辅助计算",
        headerTitle: "Index",
        sideOpen: !mdlMobile.matches,
        mdMobile: mdlMobile.matches
      }
    },
    methods: {
      toggleOpen () {
        this.sideOpen = !this.sideOpen;
      },
      navChange (value) {
        this.headerTitle = value;
      }
    },
    components:{
      HeaderNav,
      SideNav,
      Contents
    }
  }
</script>

