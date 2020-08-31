<template>
  <div class="nameitem" @click="$emit('click', $event)">
    <label v-if="typeof(name) === 'string'">"{{name}}"</label>
    <label v-else> Name this data <br><input type="text" name="" value=""></label>
    <SendButton/>

  </div>
</template>

<script>
import SendButton from '@/components/SendButton.vue'
export default {
  components: {
    SendButton
  },
  props: {
    name: {
    }
  }
}
</script>

<style lang="scss" scoped>
.nameitem{
  position: relative;
  flex-basis: 40%;
  flex-grow: 1;
  text-align: left;
  padding: 1em;
  input{
    display: inline-block;
    width: 100%;
  }
}

@media (max-width: 800px){
  .nameitem{
    flex-basis: 100%;
  }
}
</style>
