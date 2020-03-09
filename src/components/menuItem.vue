<template>
      <router-link v-if="isVisible"
        exact-active-class="text-success"
        :to="{name: route.name}"
        class="nav-link"
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
  computed: {
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
  }
};
</script>
