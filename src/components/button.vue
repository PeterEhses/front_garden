<template>
  <div class="button-wrapper" :class="{'bottom-right':bottomright}">
    <hr v-if="line" :style="bHeight">
    <button  ref="button" @click="onClick" class="v-button" :disabled="disabled">
      <slot>Button</slot>
    </button>
  </div>

</template>
<script>
export default {
  name: "Button",
  props: {
    line: Boolean,
    disabled: Boolean,
    bottomright: Boolean,
    onClick: {
      type: Function,
      required: true
    }
  },
  data: function () {
    return{
      bHeight: {transform: "translateY(0.75rem)"}
    }
  },
  methods: {
    getBHeight: function() {
      //console.log(this.$refs.button.offsetHeight);
      this.$data.bHeight = {transform: 'translateY('+this.$refs.button.offsetHeight/2+'px)'};
    }
  }, mounted() {
    this.getBHeight();
  }
}
</script>
<style lang="scss" scoped>
.v-button{
  position: relative;
  background-color: $highlight-default;
  border: $outline-weight solid $white;
  border-radius: 100000px;
  color: $white;
  padding: 0 0.7rem;
  margin-bottom: 0.5rem;
  &:hover{
    background-color: $highlight-selected;
  }

  &:disabled{
    background-color: $highlight-disabled;
    color: $disabled;
    border-color: $disabled;
  }
}
.button-wrapper{

  hr{
  border: $outline-weight solid $highlight-default;
  display: block;
  position: absolute;
  width: 50vw;
  top: 10%;
  margin: 0;
  left: 50%;
  //transform: translateY(0.75rem); // 0.75rem magic number. not responsive to button font size
  }
}

.bottom-right{
  position: absolute;
  right: 0;
  bottom: $frame-constant;

}
</style>
