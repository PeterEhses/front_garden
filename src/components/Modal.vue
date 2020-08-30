<template>
<div class="modal" @click="$emit('click')">
  <div class="filter">

  </div>
  <div class="backdrop">

  </div>

  <div class="modal-inner">
    <slot>something went wrong</slot>
  </div>
  <close/>


</div>
</template>

<script>
import Close from 'vue-material-design-icons/Close.vue';
        export default {
            name: 'Modal',
            components: {
              Close
            }
        };
    </script>

<style lang="scss" scoped>
.modal{
  background: rgba(27, 27, 27, 0.5);
  z-index: 1200;
  //background: red;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
.modal-inner{
  z-index: 1;
  position: relative;
  //background: red;
  width: 85%;
  height: 75%;
  margin: 10% 5% 10% 10%;
  width: 100%;
  width: 100vw;
  height: 100%;
  margin: 0;
  padding: calc(10.5vmin + 2vmin);
  padding-right: calc(5vmin + 1.3vmin);
  box-sizing: border-box;

}
.filter{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(.4em);
}
.backdrop{

  z-index: 0;
  position: fixed;
  top: 0;
  left: 0;
  margin: calc(10.5vmin + 2vmin);
  margin-right: 5vmin;
  width: calc(100% - 15.5vmin - 3.5vmin); // thanks firefox
  height: calc(100% - 21vmin - 4vmin);
  background: $bg-dark;
  border: $outline-weight solid $highlight-default;
  border-radius: 0 0 1.5*$frame-constant 0;
}
.material-design-icon{
  z-index: 9001;
  width: 2em;
  height: 2em;
  background: $highlight-default;
  border: $outline-weight solid $white;
  border-radius: 12345px;
  position: fixed;
  top: calc(10.5vmin - 1em + 1.9vmin);
  right: calc(5vmin - 1em + 1.2vmin);
  svg{
    width: 2em;
    height: 2em;
  }
}
@media (max-width: 800px){
  .modal-inner{
    padding: calc(10.5vmin + 4vmin);
    padding-right: calc(5vmin + 5.5vmin);
  }
  .backdrop{
    margin: calc(10.5vmin + 4vmin);
    margin-right: 5vmin;
    width: calc(100% - 15.5vmin - 10vmin);
    height: calc(100% - 21vmin - 8vmin);
  }
  .material-design-icon{
    width: 1.5em;
    height: 1.5em;
    top: calc(10.5vmin - .75em + 3.8vmin);
    right: calc(5vmin - .75em + 5.2vmin);
    svg{
      width: 1.5em;
      height: 1.5em;
    }
  }

}
</style>
