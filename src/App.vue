<template>
  <div id="app">
    <div class="popout" ref="scroller">
      <div class="contentwrap">
        <router-view></router-view>
        <Footer/>
      </div>

    </div>
    <siteMenu siteName="tangled garden" ref="menu"/>

  </div>
</template>

<script>
import siteMenu from './components/siteMenu.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: 'App',
  components: {
  siteMenu,
  Footer
},
watch:{
    // $route (){
    //     this.$refs.menu.close();
    //     let element = document.getElementById("popout");
    //     if (element !== null) {
    //       element.scrollTo(0,0);
    //     }
    // }
}
}
</script>

<style lang="scss">
@import "~@/scss/_preload.scss";
@import "~@/scss/default-styles.scss";

#app {
  border: $outline-weight dashed $highlight-default;
  width: 95vw;
  width: calc(100% - #{$frame-constant});
  height: 90vw;
  height: calc(100% - #{$frame-constant * 2});
  margin: $frame-constant;
  padding: 0;
  text-align: center;
  // @include dot-grid();
}
.popout {
  // z-index: 2;
  position: relative;
  top: -$frame-constant;
  height: 100%;
  height: calc(100% + #{$frame-constant / 2});
  padding: $frame-constant*1.5 0 0 $frame-constant/2;
  overflow-x: hidden;
  overflow-y: auto;
  &:after{ // dumb fix fore firefox that ignores trailing padding in :scroll
    content: "";
    display: block;
    height: $frame-constant*1.5;

  }
  & > * {
    margin-right: $frame-constant/2;
  }
  .contentwrap{
    min-height: calc(100vh - #{$frame-constant * 3.5});
    position: relative;
  }
}


</style>
