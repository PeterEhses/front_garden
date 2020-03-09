<template>
  <div id="app">
    <siteMenu siteName="tangled garden"/>
    <router-view></router-view>
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

#app {
  border: $outline-weight dashed $highlight-default;
  width: calc(100% - #{$frame-constant * 2});
  height: calc(100% - #{$frame-constant * 3});
  margin: $frame-constant;
  padding: $frame-constant/2;
  text-align: center;
  @include dot-grid();
}
</style>
