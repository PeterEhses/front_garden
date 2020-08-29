<template>
  <div class="button-wrapper" :class="{'bottom-right':bottomright, 'right': right}">
    <hr v-if="line" >
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
    right: Boolean,
    onClick: {
      type: Function,
      required: false
    }
  },
  data: function () {
    return{
      bHeight: {transform: "translateY(0.75rem)"}
    }
  },
  methods: {
    getBHeight: function() {
      this.$data.bHeight = {transform: 'translateY('+this.$refs.button.clientHeight/2+'px)'};
    }
  }, mounted() {
    this.getBHeight();
  }
}
</script>
<style lang="scss" scoped>
.v-button{
  box-sizing: border-box;
  position: relative;
  background-color: $highlight-default;
  border: $outline-weight solid $white;
  border-radius: 100000px;
  color: $white;
  padding: 0 0.7rem;
  margin: 0;
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
  padding: 0;
  margin: 0;
  margin-bottom: 0.5rem;
  box-sizing: border-box;
  position: relative;
  hr{
  border: $outline-weight solid $highlight-default;
  display: block;
  position: absolute;
  width: 50vw;
  height: 0;
  margin: 0;
  //margin-top: 0.1em;
  top: 50%;
  left: 50%;
  //transform: translateY(0.75rem); // 0.75rem magic number. not responsive to button font size
  }
  button{
    position: relative;
    top: -$outline-weight;
    box-sizing: border-box;
  }
}

.bottom-right{
  position: absolute;
  right: 0;
  bottom: $frame-constant;
}
</style>
