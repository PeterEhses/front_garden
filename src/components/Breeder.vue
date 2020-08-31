<template>
  <div class="breeder">
    <div class="breeder-content">
      <h3 class="breeder-content-hint" v-if="hasImages">
        select multiple images to breed
      </h3>
      <div class="breeder-content-images" v-else>
        <div class="breeder-image" v-for="image in images" v-lazy:background-image="image.image_file" loading="lazy" :key="image.uuid">
          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">
        </div>
      </div>
      <v-button right line :onClick="sendBreed" :disabled="hasImages">
      breed
    </v-button>
    </div>
  </div>
</template>

<script>
import Button from './button.vue';
export default {
  name: "breeder",
  components: {
    "v-button": Button
  },
  props: {
    images: {
      type: Object,
      default: ()=>{return {}}
    }
  },
  data(){
    return{
    hasImages: false,
    }
  },
  computed: {

  },
  watch: {
    images: {
        handler: function(){
          if(Object.keys(this.images).length > 0){
            this.hasImages = false;
            console.log(this.images)
          } else {
            this.hasImages = true;
          }
        },
        deep: true,
        immediate: true,
    }
  },
  methods: {
    sendBreed(){
      this.$emit('sendbreed')
    },
      breed(){
        this.$emit('breed')
      }
  }
}
</script>

<style lang="scss">
.breeder{
  z-index: 1;
  border: $outline-weight solid $highlight-default;
  position: relative;
  position: sticky;
  top: -1.5%;
  top: -3.3vmin;
  border-radius: 12345px;
  margin: 1.5%;
  background-color: $bg-dark;
  width: 96.9%;
  &::after {
    content: '';
    display: block;
    padding-bottom: 12.5%;
  }
  h3{
    text-align: center;
    flex-grow: 1;
  }
}

.breeder-content{
  position: absolute;
  width: 100%;
  height: 101%;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  & .button-wrapper{
    margin: 0 !important;
  }
}
.breeder-content-images{
  flex-grow: 1;
  flex-shrink: 1;
  text-align: left;
  height: 100%;
  max-width: 100%;
}
.breeder-image{
  background-color: $bg-dark;
  border: $outline-weight solid $highlight-default;
  position: relative;
  border-radius: 12345px;
  height: 100%;
  width: auto;
  margin-right: -7.75%;
  margin-top: -$outline-weight;
  display: inline-block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  img{
    background: none;
    display:block;
    height:100%;
    width:auto;
}
}

@media (max-width: 800px){
  .breeder{
    margin: 5%;
    width: 89.9%;
    &::after {
      content: '';
      display: block;
      padding-bottom: 25%;
    }
    .breeder-image{
      margin-right: -22%;
    }
  }
}
</style>
