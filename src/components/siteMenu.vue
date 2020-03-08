<template>
<nav id="menu">
  <div id="menu-links">
    <router-link to="/donate">donate</router-link>
    <router-link to="/care">care</router-link>
    <router-link to="/datenschutz">Impressum / GDPR</router-link>

  </div>
  <div id="sitename">
    <input type="checkbox" />
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
export default {
  name: 'siteMenu',
  props: {
    siteName: String
  }
}
</script>

<style lang="scss">

#menu{
  width: 100vh; /* Fallback for browsers that do not support Custom Properties */
  width: calc(var(--vh, 1vh) * 100);
  height: 33vw;
  left: 0;
  top: 0;
  padding: 0;
  margin: 0;
  position: fixed;
  transform-origin: left top;

  transform: rotate(-90deg) translateX(-100%);

  a {
    text-decoration: none;
    @include font-default(1);
  }
}

#menu-links {
  padding: 0.5rem;
  background-color: $bg-dark;
  border: $outline-weight solid $highlight-default;
  border-top: none;
  border-radius: 0 0 1000px 1000px;
}

#sitename{

  display: flex;
  align-items: center;
  height: 5vmin;

  div {
    display: inline-block;
    margin: 0 2vmin;
  }

  h1{
    display: inline-block;
    font-size: 5vmin;
    line-height: 4vmin;
  }

  span{
    display: inline-block;
    position: relative;
    width: 3.5vmin;
    height: 3.5vmin;
    margin: 0 0.5vmin;
    border: $outline-weight solid $white;
    border-radius: 1000px;
  }
}
</style>
