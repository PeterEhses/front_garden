<template>
  <div class="singlegalleryinner" v-on:click.stop="$emit('childclick')">
    <img :src="image.image_file" alt="" :class="imagefullscreen ? 'imagefullscreen' : null" @click="imagefullscreen = !imagefullscreen">
    <div v-if="imagefullscreen" class="darkoverlay" @click="imagefullscreen = !imagefullscreen"></div>
    <img v-if="imagefullscreen" :src="image.image_file" alt="" :style="{opacity: 0}">
    <div class="infos">
      <JsonTable :srcjson="image"/>
    </div>
    <div class="selectables">

    </div>
    {{imagefullscreen}}

  </div>
</template>

<script>
import JsonTable from '@/components/JsonTable.vue';
export default {
  components: {
    JsonTable
  },
  props: {
    image: {
      type: Object
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
    console.dir(this)
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
    max-width: 100%;
    max-height: 50vh;
    overflow: hidden;
    border-radius: 0 0 $frame-constant*2 0;
  }
}

.infos{
  flex-grow: 1;
  flex-basis: 50%;
  max-width: 100%;
  max-height: 50vh;
  overflow-x: hidden;
  overflow-y: scroll;

}

.selectables{
  flex-basis: 100%;
}

@media (max-width: 800px){
  .singlegalleryinner{
    margin-bottom: 14vmin;
  }
}
</style>
