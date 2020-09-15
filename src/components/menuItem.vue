<template>
      <router-link v-if="isVisible"
        exact-active-class="text-success"
        :to="{name: route.name}"
        :class="['nav-link', cheatHome ? 'text-success' : '']"
      >{{name}}</router-link>
</template>

<script>
export default {
  name: "menu-item",
  props: {
    route: {
      type: Object
    }
  },
  data(){
    return{
      activeroute: this.$router.currentRoute.path
    }
  },
  computed: {
    cheatHome(){
      if(this.route.name == 'home' && this.activeroute.split('/')[1] == 'donate' ){

        return true
      }
      return false
    },
    isVisible() {
      if (
        this.route.meta &&
        (this.route.meta.visible === undefined || this.route.meta.visible)
      ) {
        return true;
      }
      return false;
    },
    name() {
      return this.route.title;
    }
  },
  watch: {
    $route(){
      this.activeroute = this.$router.currentRoute.path
    }
  },
};
</script>
