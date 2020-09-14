<template>
<div id="home">
  <p>The Garden of Tangled Data is a safe space.</p>
  <p>The data you donate will become part of our community garden.</p>
  <p>It will decay within the next three days.</p>
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
