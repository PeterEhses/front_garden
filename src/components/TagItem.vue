<template>
  <div class="taginput">
    <h3>Name this data</h3>

      <label  class="container" v-for="tag in inactiveTags" :key="tag.id">

      <input  type="checkbox" :checked="activeTags[tag.id]">
      <span class="checkmark"></span>
      {{tag.name}}
    </label >
    <SendButton class="sendhack"/>
  </div>
</template>

<script>
import SendButton from '@/components/SendButton.vue'
export default {
  components: {
    SendButton
  },
  props: {
    tags: {

    },
    activeTags: {

    }
  },
  computed: {
    inactiveTags(){
      let iTags = {}
      for(const key in this.tags){

        if(this.tags[key].hidden === false){
          iTags[key]=this.tags[key]
        }
      }
      console.log(iTags)
        return iTags
    }

  }
}
</script>

<style lang="scss" scoped>

.taginput{
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  flex-grow: 1;
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  border: $outline-weight solid $highlight-default;
  padding: .9em 1em 1.5em 1em;
  margin: 1em 1em 2em 1em;
  border-radius: 0 0 1.5em 0;
  border-radius: $outline-weight*6;
  h3{
    @include font-highlight();
    flex-basis: 100% !important;
    text-align: left;
    margin: .2em;
  }
  .container{
    @include font-default(.9);
    padding: .2em .5em .2em 1.5em;
    word-break: break-all;
    box-sizing: border-box;
    display: block;
    position: relative;
    border-radius: 12345px;
    border: $outline-weight solid $highlight-default;
    margin: .1em;
  }
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: .39em;
    transform: translate(0, -50%);
    height: 1em;
    width: 1em;
    background-color: $bg-dark;
    border-radius: 12345px;
    border: $outline-weight solid $highlight-default;
  }

  .container:hover input ~ .checkmark {
    border: $outline-weight solid $highlight-bright;
  }

  .container input:checked ~ .checkmark {
    background-color: $highlight-default;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    left: 20%;
    top: 45%;
    width: 5px;
    height: 10px;
    border: solid $white;//$bg-dark;
    border-width: 0 $outline-weight*2 $outline-weight*2 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg) translate(-50%, -50%);
  }

  & > *{
    flex-basis: 13em;
    flex-grow: 1;
    flex-shrink: 1;
  }
}

.sendhack{
  bottom: 0;
  right: 0;
  transform: translate( 50%, 50%);
}

@media (max-width: 800px){
    .taginput{
      padding: .3em .33em 1em .33em;
      //border-left: none;
      //border-right: none;
      margin-left: .33em;
      margin-right: .33em;
    }
    .sendhack{
      bottom: 0;
      right: 0;
      transform: translate( calc(50% - .33em), 50%);
    }
}
</style>
