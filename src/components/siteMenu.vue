<template>
<nav id="menu" role="navigation">
  <input type="checkbox" checked/>
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
      <span></span>
      <span></span>
      <span></span>
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
  computed: {
    routes() {
      return this.$router.options.routes;
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
  transform: translateY( calc(-2.7rem - #{$outline-weight}));
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
    height: $frame-constant*0.82;
    padding: 0;
    margin: 0 0 0 $frame-constant;
    #threeDots {
        display: flex;
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
        }
        transform: translateY(0.5vmin);
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
</style>
