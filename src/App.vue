<template>
  <div id="app">
    <div id="popout" ref="scroller">

        <router-view></router-view>

    </div>
    <siteMenu siteName="tangled garden" ref="menu"/>
  </div>
</template>

<script>
import siteMenu from './components/siteMenu.vue';

export default {
  name: 'App',
  components: {
  siteMenu
},
watch:{
    $route (){
        this.$refs.menu.close();
        let element = document.getElementById("popout");
        if (element !== null) {
          element.scrollTo(0,0);
        }
    }
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
#popout {
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
}


</style>
