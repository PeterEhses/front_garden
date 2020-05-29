<template>
  <div class="careSelect">
    <p>The Garden of Tangled Data cares for data.</p>
    <p>You are the gardener. </p>

    <v-button v-bind:onClick="dud"  line>crossbreed data</v-button>
    <v-button v-bind:onClick="dud"  line>name data</v-button>
    <v-button v-bind:onClick="dud"  line>what does data want?</v-button>
    <v-button v-bind:onClick="dud"  line>allow data to decompose</v-button>
  </div>

</template>

<script>
import Button from './button.vue';

export default {
  name: "careSelect",
  components: {
    "v-button" : Button,
  }, methods: {
    dud() {
      this.$router.push({ path: 'breed' })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
