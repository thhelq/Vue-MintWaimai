<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>
<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'

  export default {
    components: {
      FooterGuide
    }
  }
</script>
<style lang="stylus">
/*#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983*/

#app
  width 100%
  height 100%
  background #f5f5f5
</style>
