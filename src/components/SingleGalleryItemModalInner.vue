<template>
  <div class="singlegalleryinner" v-on:click.stop="$emit('childclick')">
    <img :src="image.image_file" alt="" :class="imagefullscreen ? 'imagefullscreen' : null" @click="imagefullscreen = !imagefullscreen">
    <div v-if="imagefullscreen" class="darkoverlay" @click="imagefullscreen = !imagefullscreen"></div>
    <img v-if="imagefullscreen" :src="image.image_file" alt="" :style="{opacity: 0}">
    <div class="infos">
      <JsonTable :srcjson="image"/>
    </div>
    <div class="selectables">
        <NameItem v-if="nameItem" :name="image.name"/>
        <NameItem v-if="nameItem" :name="image.name"/>
    </div>


  </div>
</template>

<script>
import JsonTable from '@/components/JsonTable.vue';
import NameItem from '@/components/NameItem.vue';
export default {
  components: {
    JsonTable,
    NameItem,
  },
  props: {
    /**
    *  image object, should contain all data needed
    */
    image: {
      type: Object,
      required: true
    },
    /**
    * display breeding select on image modal
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
      imagefullscreen: false
    }
  },
  computed: {

  },
  mounted(){
    //console.dir(this)
  }
}
</script>

<style lang="scss" scoped>
.darkoverlay{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(27,27,27,.9);
}
.imagefullscreen{
  border-radius: 0 !important;
  z-index: 12345 !important;
  position: fixed;
  width: auto !important;
  height: auto !important;
  max-width: 100vw !important;
  max-height: 100vh !important;
  margin: 0 !important;
  padding: 0 !important;
  object-fit: contain;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.singlegalleryinner{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: stretch;


  position: relative;
  box-sizing: border-box;
  padding: 1em;
  margin-bottom: 12.4vmin;
  width: 100%;
  height: auto;
  //border: 1px solid blue;
  //background: blue;
  img{
    max-width: 50%;
    max-height: 50vh;
    object-fit: contain;
    align-self: center;
    overflow: hidden;
    border-radius: 0 0 $frame-constant*2 0;
  }
}

.infos{
  position: relative;
  flex-grow: 1;
  flex-basis: 50%;
  max-width: 100%;
  max-height: 50vh;
  overflow-x: hidden;
  overflow-y: scroll;

}

.selectables{
  flex-basis: 100%;
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
}

@media (max-width: 800px){
  .selectables{
    padding: 0;
  }

  .infos{
    order: 9001;
    flex-basis: 100%;
  }
  .singlegalleryinner{
    margin-bottom: 14vmin;
    img{
      max-width: 100%;
      align-self: stretch;
    }
  }
}
</style>
