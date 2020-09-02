<template>
  <div id="donate">
  <p>Welcome to the garden of tangled data.</p>
    <p>Please plant pieces of data.</p>
    <p>You can also forward emails to <a href="mailto:donate@tangled.garden">donate@tangled.garden</a> or use the scanner device.</p>
    <donation-form />
  </div>
</template>

<script>
import donationForm from './donationForm.vue';
export default {
  name: "donate",
  components: {
    "donation-form": donationForm
  }
}
</script>

<style lang="scss" scoped>
</style>
