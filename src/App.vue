<template>
  <div class="container" id="app">
    <header-nav></header-nav>
  </div>
</template>

<script>
  import header from './components/header-nav.vue';
  export default {
    name: 'app',
    data () {
      return {
      }
    },
    components:{
      'header-nav': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*#app*/
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif*/
    /*-webkit-font-smoothing: antialiased*/
    /*-moz-osx-font-smoothing: grayscale*/
    /*text-align: center*/
    /*color: #2c3e50*/
    /*margin-top: 60px*/


  /*h1, h2*/
    /*font-weight: normal*/


  /*ul*/
    /*list-style-type: none*/
    /*padding: 0*/

  /*li*/
    /*display: inline-block*/
    /*margin: 0 10px*/


  /*a*/
    /*color: #42b983*/

</style>
