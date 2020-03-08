<template>
  <div id="app">
    <siteMenu siteName="tangled garden"/>
    <router-view></router-view>
    <h1>tangled garden</h1>
    <p>paragraph text <br> hi <span> I am also text</span></p>
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import siteMenu from './components/siteMenu.vue';

export default {
  name: 'App',
  components: {
  siteMenu
  }
}
</script>

<style lang="scss">
@import "~@/scss/_preload.scss";
@import "~@/scss/default-styles.scss";

span{
  @include font-highlight(1);
}

#app {
  border: $outline-weight dashed $highlight-default;
  width: calc(100% - #{$frame-constant});
  height: calc(100% - #{$frame-constant * 2});
  margin: $frame-constant;
  padding: 0;
  text-align: center;
  @include dot-grid();
}
</style>
