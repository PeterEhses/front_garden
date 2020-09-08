<template>
  <div class="decayoptin" @click="$emit('click', $event)">
    <div class="areyousure" >
      <p>are you sure?</p>
      <p>this action cannot be undone</p>
    </div>

    <div class="yesno" >
      <button type="button" name="button" @click="$emit('yes', $event)">yes</button>
      <button type="button" name="button">no</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss" scoped>
button{
  padding: 0 1em;
  min-height: 3em;
}
p{
  margin: .2em;
  padding: 0 1em;
  min-height: 3em;
}

.decayoptin{
  z-index: 1234;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    //background: red;
  backdrop-filter: blur(1em);
}
.areyousure{
  background: $bg-dark;
  padding-top: 2em;
  border-top: $outline-weight solid $highlight-default;
  p{
    color: $highlight-default;
  }
}
.yesno{
  background: $bg-dark;
  padding: 1em 0;
  border-bottom: $outline-weight solid $highlight-default;
}
</style>
