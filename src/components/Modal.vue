<template>
<div class="modal" @click="$emit('click')">
  <div class="modal-inner">
    <slot>something went wrong</slot>
  </div>


</div>
</template>

<script>
        export default {
            name: 'Modal'
        };
    </script>

<style lang="scss" scoped>
.modal{
  z-index: 1200;
  //background: red;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.modal-inner{
  width: 85%;
  height: 75%;
  margin: 10% 5% 10% 10%;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 10.5vmin;
  padding-right: 5vmin;
  box-sizing: border-box;
}
</style>
