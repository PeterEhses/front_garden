<template>
  <form id="donationForm">
    <p class="small">Please donate 3 pieces of data</p>
    <p class="small">You can also forward emails to <a href="mailto:donate@tangled.garden">donate@tangled.garden</a> or use the scanner device.</p>
    <h2>Data</h2>

    <v-dragdrop>tap or drag&drop here to donate text or images</v-dragdrop>
    <p class="small">after reviewing your data, plant it as a new seed</p>
    <v-button v-bind:onClick="submitForm" bottomright line disabled>plant this seed</v-button>
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
.small{
  @include font-default(0.8);
  line-height: 1.3;
  margin: 0;
}
</style>
