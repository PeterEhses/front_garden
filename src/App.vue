<template>
  <div id="app">
    <siteMenu siteName="tangled garden"/>
    <h1>tangled garden</h1>
    <p>paragraph text <br> hi <span> I am also text</span></p>
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import siteMenu from './components/menu.vue';

export default {
  name: 'App',
  components: {
  menu
  }
}
</script>

<style lang="scss">

@import "~@/scss/default-styles.scss";

span{
  @include font-highlight(2);
}

#app {
  border: $outline-weight dashed $highlight-default;
  width: calc(100% - 5vmin);
  height: calc(100% - 10vmin);
  margin: 5vmin;
  padding: 0;
  text-align: center;
  @include dot-grid();
}
</style>
