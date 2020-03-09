<template>
  <div class="button-wrapper" :class="{'bottom-right':bottomright}">
    <hr v-if="line">
    <button @click="onClick" class="v-button" :disabled="disabled">
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
  margin: 0;
  left: 50%;
  transform: translateY(0.865rem); // magic number. not responsive to button font size
  }
}

.bottom-right{
  position: absolute;
  right: 0;
  bottom: $frame-constant;

}
</style>
