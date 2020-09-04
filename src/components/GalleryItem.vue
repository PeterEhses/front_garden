<template>
  <div class="li" v-lazy:background-image="image.image_file" loading="lazy" >
      <!-- <img v-lazy="img.image_file"> -->

      <div class="overlay" @click="clicked">
        <p class="small">UUID: {{ image.uuid }}</p> <br>
        <p class="small">created at: {{ createdDate }}</p>
      </div>
      <div :class="['button-overlay', image.breeding == true ? 'active' : null]" v-if="breeding" @click="$emit('breed', image)">
        <Check v-if="image.breeding"/>
        <VectorCombine v-else/>

      </div>
      <Modal v-if="modal" @click="clicked">
        <SingleGalleryItemModalInner
        :image="image"
        :nameItem="nameItem"
        :tagItem="tagItem"
        :decayIcon="decayIcon"
        :breeding="breeding"
        @breed="$emit('breed', $event)"
        />
      </Modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue'
import VectorCombine from 'vue-material-design-icons/VectorCombine.vue';
import Check from 'vue-material-design-icons/Check.vue';
import SingleGalleryItemModalInner from '@/components/SingleGalleryItemModalInner.vue'
export default {
  name: "GalleryItem",
  components: {
    Modal,
    VectorCombine,
    Check,
    SingleGalleryItemModalInner
  },
  props: {
    image: {
      type: Object
    },
    /**
    * display breeding dialog on image thumbnail
    */
    breeding: {
      type: Boolean,
      default: true
    },
    /**
    * display name dialog on image modal
    */
    nameItem: {
      type: Boolean,
      default: true
    },
    /**
    * display tag dialog on image modal
    */
    tagItem: {
      type: Boolean,
      default: true
    },
    /**
    * display decay dialog on image modal
    */
    decayIcon: {
      type: Boolean,
      default: true
    }
  },
  data(){
    return{
      modal: false
    }
  },
  computed: {
    createdDate(){
      let date = new Date(this.image.created_at)
      return date.toLocaleString()
    }
  },
  methods: {
    clicked(){
      this.modal = !this.modal
    },
  }
}
</script>

<style lang="scss" scoped>
.li{
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  background-color: $bg-dark;
  margin: 1.5%;
  flex-basis: 30.3332%;
  flex-grow: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .overlay{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    overflow-wrap: break-word;
  }
}
.li::after{
  content: "";
 display: block;
  padding-bottom: 100%;
}

.button-overlay{
  border: $outline-weight solid $white;
  border-radius: 12345px;

  width: 2rem;
  height: 2rem;
  margin: .5rem;
  position: absolute;
  bottom: 0;
  right: 0;
  &.active{
    background: $highlight-default;
  }
  span{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
      fill: $white;
      width: 1rem;
      height: 1rem;
    }
  }

}

@media (max-width: 800px){
  .li{
    margin: 5%;
    flex-basis: 40%;
  }
  .button-overlay{
    border: none;
    width: 1.5em;
    height: 1.5em;
    margin: .1em;
    span svg{
      width: .8rem;
      height: .8rem;
    }
  }
}
</style>
