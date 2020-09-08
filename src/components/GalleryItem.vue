<template>
  <div v-if="!image.decayed" class="li" v-lazy:background-image="image.image_file" loading="lazy">
      <!-- <img v-lazy="img.image_file"> -->
      <!-- <div class="duotoner">

      </div>
      <div class="duotone light">

      </div> -->
      <div class="overlay" @click="clicked">
        <p class="small">UUID: {{ image.uuid }}</p> <br>
        <p class="small">created at: {{ createdDate }}</p><br>
        <p class="small">tags: {{ activeTags.asString }}</p><br>
        <p class="small">generation: {{ image.generation }}</p>
      </div>
      <div :class="['button-overlay', image.breeding == true ? 'active' : null]" v-if="breeding" @click="$emit('breed', image)">
        <Check v-if="image.breeding"/>
        <VectorCombine v-else/>

      </div>
      <Modal v-if="modal" @click="clicked">
        <SingleGalleryItemModalInner
        :tags="tags"
        :image="image"
        :nameItem="nameItem"
        :tagItem="tagItem"
        :decayIcon="decayIcon"
        :breeding="breeding"
        @breed="$emit('breed', $event)"
        />
      </Modal>
  </div>
  <div v-else class="li decayed">
    <svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'>
      <path d='M100 0 L0 100 '  />
      <path d='M0 0 L100 100 '  />
    </svg>
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
    *  tags object, should contain all tags
    */
    tags: {
      type: Object,
      required: true
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
  watch: {
    'image.tags': {
      handler(){
        let tags = {}
        let asString = ""
        for(const id in this.image.tags){
          let tag = this.tags[this.image.tags[id]]
          if(tag){
            tags[tag.id] = tag
            if(tag.name && !tag.hidden){
              asString += tag.name + ", "
            }
          }
        }
        if(asString.length > 1){
          asString = asString.slice(0, -2)
        }
        this.image.tagsComputed = {tags, asString}
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
    activeTags(){
      let tags = []
      let asString = ""
      for(const id in this.image.tags){
        let tag = this.tags[this.image.tags[id]]
        if(tag){
          tags.push(tag)
          if(tag.name && !tag.hidden){
            asString += tag.name + ", "
          }
        }
      }
      if(asString.length > 1){
        asString = asString.slice(0, -2)
      }

      return {tags, asString}
    },
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
    user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    overflow-wrap: break-word;
  }
 &::after{
   content: "";
  display: block;
   padding-bottom: 100%;

 }
 &:hover .duotoner,
 &:focus .duotoner{
   opacity: 0;

 }
}
.duotoner{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $highlight-default;
  mix-blend-mode: hue;
  // background-color: $bg-dark;
  // mix-blend-mode: overlay;
  transition: all $transition-constant linear;
  opacity: 1;
  &.light{
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $bg-dark;
    //mix-blend-mode: color-dodge;
    transition: all $transition-constant ease-in-out;
  }
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
  &:hover{
    border: $outline-weight solid $highlight-bright;

  }
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

.decayed{
  svg{
    width: 100%;
    height: 100%;
    stroke: $highlight-default;
    stroke-width: .3;
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
