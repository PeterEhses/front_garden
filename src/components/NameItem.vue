<template>
  <div class="nameitem" >
    <label v-if="typeof(name) === 'string'">"{{name}}"</label>
    <label v-else> Name this data <br><input type="text" name="" v-model="content" placeholder="start typing ..."></label>
    <SendButton v-if="typeof(name) !== 'string'" @click="()=>{if(content.length > 0){modalvisible = true}}" :inactive="!(content.length > 0)"/>

    <YesNo @yes="$emit('name', content)" v-if="modalvisible" @click="modalvisible = false"/>
  </div>
</template>

<script>
import YesNo from '@/components/YesNo.vue'
import SendButton from '@/components/SendButton.vue'
export default {
  components: {
    SendButton,
    YesNo
  },
  props: {
    name: {
    }
  },
  data(){
    return {
      content: "",
      modalvisible: false
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
    &::placeholder{
      opacity: .4;
    }
  }
}

@media (max-width: 800px){
  .nameitem{
    flex-basis: 100%;
  }
}
</style>
