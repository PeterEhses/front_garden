<template>
  <footer class="footer">
    <router-link
      to="datenschutz"
      class="footerlink"
    >datenschutz</router-link>
    <router-link
      to="impressum"
      class="footerlink"
    >impressum</router-link>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
footer{
  z-index: 0;
  position: absolute;
  bottom: -$frame-constant*2;
  right: 0;
  opacity: .5;
  .footerlink{
    display: inline-block;
    padding: .2em;
    @include font-default(.85, $white);
  }
}
</style>
