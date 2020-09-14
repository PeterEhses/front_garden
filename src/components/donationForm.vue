<template>
  <form id="donationForm" onsubmit="return false;">

    <h2>Data</h2>

    <v-dragdrop ref="dragdrop" @uploadsuccess="$emit('submitted')" @fileLength="dataSet">tap here to donate images <legend class="small drag">Your device will ask you for permission to access your gallery.</legend></v-dragdrop>
    <!-- <legend class="small padbottom" v-if="fileLength > 0">after reviewing your data, plant it as a new seed</legend> -->
    <v-button v-bind:onClick="submitForm" bottomright line :disabled="fileLength == 0">plant this seed and advance</v-button>
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
  data(){
    return{
      fileLength: 0
    }
  },
  computed: {
  },
  methods: {
    dataSet(data){
      this.fileLength = data
    },
    submitForm(){
      if(this.$refs.dragdrop){
        this.$refs.dragdrop.upload();
      }

      //this.$emit('submitted');
    }
  }
}
</script>

<style lang="scss" scoped>
h3{
  background: red;
}
.small.drag{
  opacity: .5;
}
.small.padbottom{
  padding-bottom: 2em;
}

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
