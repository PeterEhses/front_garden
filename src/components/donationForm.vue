<template>
  <form id="donationForm" onsubmit="return false;">
    <legend class="small">Select any image files. Your phone will ask you for permission to access your photo gallery.</legend>
    <h2>Data</h2>

    <v-dragdrop ref="dragdrop">tap here to donate images</v-dragdrop>
    <legend class="small">after reviewing your data, plant it as a new seed</legend>
    <v-button v-bind:onClick="submitForm" bottomright line>plant this seed</v-button>
  </form>
</template>

<script>
import Button from './button.vue';
import DragDrop from './dragdrop.vue';
export default {
  name: "donationForm",
  components: {
    "v-button" : Button,
    "v-dragdrop" : DragDrop
  },
  methods: {
    submitForm(){
      this.$refs.dragdrop.upload();
    }
  }
}
</script>

<style lang="scss" scoped>
#donationForm{
  position: relative;
  border: $outline-weight solid $highlight-default;
  border-radius: 1.5*$frame-constant 0;
  margin: $frame-constant/4;
  padding: $frame-constant $frame-constant*1;
  padding-bottom: $frame-constant*3.5;
  background-color: $bg-dark;
}

</style>
