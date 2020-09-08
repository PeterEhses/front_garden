<template>
  <div class="singlegalleryinner" v-on:click.stop="$emit('childclick')">
    <img :src="image.image_file" alt="" :class="imagefullscreen ? 'imagefullscreen' : null" @click="imagefullscreen = !imagefullscreen">
    <div v-if="imagefullscreen" class="darkoverlay" @click="imagefullscreen = !imagefullscreen"></div>
    <img v-if="imagefullscreen" :src="image.image_file" alt="" :style="{opacity: 0}">
    <div class="infos">
      <JsonTable :srcjson="image"/>
    </div>
    <div class="selectables">
        <NameItem v-if="nameItem" :name="image.name" @name="nameItemAction"/>
        <BreedSelectItem v-if="breeding" :breed="image.breeding" @click="$emit('breed', image)"/>
        <DecayItem v-if="decayItem" :decay="image.decay" :decayed="image.decayed" @decay="decayItemAction"/>
        <TagItem v-if="tagItem" :tags="tags" :activeTags="image.tagsComputed.tags"/>
    </div>
  </div>
</template>

<script>
import JsonTable from '@/components/JsonTable.vue';
import NameItem from '@/components/NameItem.vue';
import DecayItem from '@/components/DecayItem.vue';
import BreedSelectItem from '@/components/BreedSelectItem.vue';
import TagItem from '@/components/TagItem.vue';
export default {
  components: {
    JsonTable,
    NameItem,
    BreedSelectItem,
    DecayItem,
    TagItem
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
    *  tags object, should contain all tags
    */
    tags: {
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
    decayItem: {
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
  methods: {
    uploadSucc(e){
      console.log(e)
    },
    uploadFail(e){
      console.log(e)
    },
    upload(data){
      console.log("up")
      let _this = this;

      let formData = new FormData();
      for(var [key, value] of Object.entries(data)){
        formData.append(""+key, value);
        console.log(key, value)
      }
      let path = this.$gardenApi.getPath(this.$gardenApi.imagesPath, this.image.uuid)
      console.log(path)
      this.axios.patch( path,
        formData,
        {
          headers: {
              'Content-Type': 'multipart/form-data' //  'application/json'//
          }
        }
      ).then(function(response){
          _this.uploadSucc(response)
      })
      .catch(function(reason){
        _this.uploadFail(reason)
      });
    },
    updateProperty(p){
      this.upload(p)
      for(var [key, value] of Object.entries(p)){
        this.image[key] = value
        console.log(this)
      }
      console.log(p)
    },
    nameItemAction(name){
      this.updateProperty({name: name})
    },
    decayItemAction(){
      console.log("DDD")
      this.updateProperty({decay: true})
    }
  },
  mounted(){
    //console.dir(this)
    if(this.image.metadata !== null && typeof(this.image.metadata) === 'string'){
      let md = this.image.metadata
      md = md.replace(/False/g, 'false').replace(/True/g, 'true').replace(/\\x/g, '').replace(/"/g, '`').replace(/'/g, '"');
      try{
        md = JSON.parse(md)
         this.image.metadata = md
      } catch (err) {
        this.image.metadata = {error: err}
        console.log(md, err)
      }

    }
  }
}
</script>

<style lang="scss" scoped>
.darkoverlay{
  z-index: 20;
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
  padding-bottom: 6.2vmin;
  margin-bottom: 6.2vmin;
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
