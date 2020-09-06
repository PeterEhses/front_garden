<template>
  <div class="decayitem">
    <button type="button" name="button" @click="decayoptin = true" v-if="!decay">let this image decay</button>
    <div class="decayed" v-else>
      <p v-if="!decayed">this data is decaying</p>
      <p v-else>this data has decayed</p>
    </div>
    <div class="decayoptin" v-if="decayoptin" @click="decayoptin = false">
      <div class="areyousure" >
        <p>are you sure?</p>
        <p>this action cannot be undone</p>
      </div>
      <div class="yesno">
        <button type="button" name="button" @click="$emit('decay')">yes</button>
        <button type="button" name="button">no</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    decay: {
      type: Boolean,
      default: false
    },
    decayed: {
      type: Boolean,
      default: false
    },
  },
  data(){
    return{
        decayoptin: false
    }
  }
}
</script>

<style lang="scss" scoped>
.decayitem{
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
p{
  margin: .2em;
  padding: 0 1em;
  min-height: 3em;
}

.decayoptin{
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
