<template>
<nav id="menu" role="navigation">
  <input type="checkbox" v-model="checked"/>
  <div id="menu-links">

    <menu-item v-for="(r,i) in routes" :key="i" :route="r"></menu-item>
    <!--
    <router-link to="./care">care</router-link>
    <router-link to="./datenschutz">Impressum / GDPR</router-link>
  -->
  </div>

  <div id="sitename">

    <h1>{{ siteName }}</h1>
    <div id="threeDots">
      <span v-for="(r,i) in routes" :key="i" :class="[(r.meta && r.meta.visible) ? 'visible' : 'hidden']">
        <div class="menuitemactivedot" v-if="r.name == activerouteStart">
          <div class="inside">

          </div>
        </div>
      </span>
    </div>
  </div>
</nav>
</template>

<script>
import menuItem from "./menuItem.vue";
export default {
  name: 'siteMenu',
  components: {
    menuItem
  },
  props: {
    siteName: String
  },
  data: function () {
    return {
      checked: true,
      activeroute: this.$router.currentRoute.path
    }

  },
  computed: {
    activerouteStart(){
      let str = this.activeroute;
      let retStr = str.split("/")[1]
      if(retStr == "donate") retStr = "home";
      return retStr
    },

    routes() {
      let routes = [];
      for(let route of this.$router.options.routes){
        routes.push(route);
        if(route.children){
          routes = routes.concat(route.children);
        }
      }

      return routes;
    }
  },
  watch: {
    $route(){
      this.activeroute = this.$router.currentRoute.path
    }
  },
  methods: {
    close: function() {
      this.checked = true;
    }
  }
}
</script>

<style lang="scss" scoped>
#menu {
  pointer-events: none;
  & > * {
    pointer-events: auto;
  }
    width: 100vh;
    /* Fallback for browsers that do not support Custom Properties */
    width: calc(var(--vh, 1vh) * 100);
    height: 33vw;
    left: 0;
    top: 0;
    padding: 0;
    margin: 0;
    position: fixed;
    transform-origin: left top;

    transform: rotate(-90deg) translateX(-100%); // rotate & push down

    z-index: 90001;

    input {
        display: block;
        position: absolute;
        top: 2.7rem;
        cursor: pointer;
        opacity: 0; // hide this

        height: $frame-constant;
        width: 50vh;
        z-index: 9001;
        transition: $transition-constant;
    }
}

#menu input:checked ~ div,
#menu input:checked{
  transform: translateY( calc(-2.75rem - #{$outline-weight}));
}


#menu-links {

    display: flex;
    justify-content: space-evenly;
    padding: 0.7rem 1rem 1rem 1rem;
    background-color: $bg-dark;
    border: $outline-weight solid $highlight-default;
    border-top: none;
    border-radius: 0 0 1000px 1000px; // full radius around left side limit

    a {
        text-decoration: none;
        @include font-default(1);
        font-size: 1rem;
        line-height: 1rem;
    }
    transition: $transition-constant;
}

#sitename {

    display: flex;
    align-items: center;
    height: $frame-constant*.9;
    padding: 0;
    margin: 0 0 0 $frame-constant;
    #threeDots {
        display: flex;
        position: relative;
        top: .5vmin;
        align-items: center;
        margin: 0 2vmin;
        height: 0.7*$frame-constant/2;
        span {
            display: inline-block;
            position: relative;
            width: 0.7*$frame-constant/2;
            height: 0.7*$frame-constant/2;
            margin: 0 0.5vmin;
            border: $outline-weight solid $white;
            border-radius: 1000px;

            .menuitemactivedot{
              box-sizing: border-box;
              position: absolute;
              top: 25%;
              left: 25%;
              width: 50%;
              height: 50%;
              background: $highlight-default;
              border-radius: 12345px;
              .inside{
                box-sizing: border-box;
                height: $outline-weight;
                width: 50%;
                position: absolute;
                top: 50%;
                left: -50%;
                background: $white;
              }
            }
        }
        // transform: translateY(0vmin);
    }

    h1 {
        margin: 0;
        padding: 0;
        font-size: 0.7*$frame-constant;
        line-height: 0.7*$frame-constant;
    }
    transition: $transition-constant;
}

.text-success{
  color: $highlight-default !important;
}

.hidden{
  display: none !important;
}
</style>
