<template>
<div class="send-button">
  <send/>
</div>
</template>

<script>
import Send from 'vue-material-design-icons/Send.vue';
export default {
  components: {
    Send
  }
}
</script>

<style lang="scss" scoped>
.send-button{

  position: absolute;
  bottom: .4em;
  right: .25em;
  height: 1.4em;
  width: 1.4em;
  border-radius: 12345px;
  border: $outline-weight solid $white;
  background: $highlight-default;

  display: flex;
  justify-content: center;
  align-items: center;
  span{
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
      padding-left: .15em;
      width: .75em;
      height: .75em;
    }
  }
}
</style>
