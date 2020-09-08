<template>
  <div class="decayitem">
    <button type="button" name="button" @click="decayoptin = true" v-if="!decay">let this image decay</button>
    <div class="decayed" v-else>
      <p v-if="!decayed">this data is decaying</p>
      <p v-else>this data has decayed</p>
    </div>
    <YesNo @yes="$emit('decay')" v-if="decayoptin" @click="decayoptin = false"/>
  </div>
</template>

<script>
import YesNo from '@/components/YesNo.vue'
export default {
  components:{
    YesNo
  },
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
  position: relative;
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


</style>
