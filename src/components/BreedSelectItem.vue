<template>
<div class="breedselect">
  <button type="button" name="button" v-if="breed" @click="$emit('click', $event)">remove from breeding</button>
  <button type="button" name="button" v-else @click="$emit('click', $event)">select for breeding</button>

</div>
</template>

<script>
export default {
  props: {
    breed: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.breedselect{
  box-sizing: border-box;
  padding: .5em;
  flex-basis: 50%;
  flex-grow: 1;
  display: flex;
  align-content: center;
  justify-content: center;
}
button{
  padding: 0 1em;
  min-height: 3em;
}
</style>
