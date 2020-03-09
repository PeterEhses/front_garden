<template>
<div id="home">
  <p>Welcome to The Garden of Tangled Data</p>
  <p>The Garden of Tangled Data is a safe space.</p>
  <p>The data you donate will be processed in this room exclusively.</p>
  <p>It will not be given to third parties.</p>
  <p>All donated data will be deleted on March 30th, 2020 in a big potlatch ceremony.</p>
  <v-button v-bind:onClick="agreeClick" line>agree & continue</v-button>
</div>
</template>

<script>
import Button from './button.vue';
export default {
  name: "home",
  components: {
    "v-button" : Button
  },
  methods: {
  agreeClick() {
    this.$router.push({ path: 'donate' })
  }
  }
}
</script>

<style lang="scss" scoped>
</style>
