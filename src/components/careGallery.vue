<template>
  <div class="gallery">
    <Breeder :images="toBreed" @sendbreed="sendBreed"/>
    <GalleryFilter :type="requestType" :direction="requestDirection" @typechange="changeRequestType" @directionchange="changeRequestDirection"/>

    <div class="ul" v-if="objSize(images) > 0">
      <GalleryItem v-for="img in images" :key="img.uuid" :image="img" @breed="changeBreed"/>

    </div>
    <div class="loader" v-else>
      loading . . .
    </div>
  </div>
</template>

<script>

import GalleryItem from '@/components/GalleryItem.vue'
import Breeder from '@/components/Breeder.vue'
import GalleryFilter from '@/components/GalleryFilter.vue'

export default {
  name:"careGallery",
  components: {
    Breeder,
    GalleryItem,
    GalleryFilter,

  },
  props: {

  },
  data: function(){
    return{
      responseJson: {},
      requestType: "created_at",
      requestDirection: true,
      toBreed: {}
    }

  },
  methods:{
    objSize(obj){
      var size = 0, key;
      for (key in obj) {
        if(typeof(obj[key])!=="undefined") size++;
      }
      return size;
    },
    sendBreed(){
      let self = this;
      let formData = new FormData();
      let parents = []
      let generation = 0;
      let tags = [5]
      formData.append('tags', 5)
      for(const uuid in this.toBreed){
        let f = this.toBreed[uuid]
        parents.push(f.uuid);
        if(f.tags.length > 0){
          tags.push(f.tags);
        }
        if(f.generation > generation){
          generation = f.generation
        }
        formData.append('parents', f.uuid)
        for(let i = 0; i < f.tags.length; i++){
          formData.append('tags', f.tags[i])
        }

      }
      generation += 1;

      formData.append('generation', generation)
      formData.append('garden', this.$gardenApi.garden)
      // for (var pair of formData.entries()) {
      //     console.log(pair[0]+ ', ' + pair[1]);
      // }
      this.axios.post(
//'https://fuckthislol.free.beeceptor.com/',
this.$gardenApi.getPath(this.$gardenApi.seedsPath),
        formData,
        {
          headers: {
              'Content-Type': 'multipart/form-data' //  'application/json'//
          }
        }
      ).then(function(response){
        console.log('breed POST success', response);
        for(var breedo in self.toBreed){
          self.responseJson[breedo].breeding=false
          self.$delete(self.toBreed, breedo)
        }
      })
      .catch(function(e){
        console.error('breed POST fail', e)
        alert("Something went wrong with breeding.")
      });
    },
    changeBreed(e){

      if(this.toBreed[e.uuid]){
        this.responseJson[e.uuid].breeding = false;
        this.$delete(this.toBreed, e.uuid);
      } else {
        this.responseJson[e.uuid].breeding = true;
        this.$set(this.toBreed, e.uuid, this.responseJson[e.uuid]);
      }

    },
    changeRequestDirection(e){
      this.requestDirection = e;
      this.getImages()
    },
    changeRequestType(e){
      this.requestType = e;
      this.getImages()
    },
    arrayToObject(arr){
      let obj = {}
      for(let i = 0; i < arr.length; i++){
        if(arr[i].garden == this.$gardenApi.garden){
          arr[i].breeding = false;
          if(arr[i].metadata !== null && typeof(arr[i].metadata === 'string')){
            let md = arr[i].metadata
            md = md.replace(/False/g, 'false').replace(/True/g, 'true').replace(/\\x/g, '').replace(/"/g, '`').replace(/'/g, '"');
            try{
              md = JSON.parse(md)
               arr[i].metadata = md
            } catch (err) {
              arr[i].metadata = {error: err}
              console.log(i, md)
            }

          }
          obj[arr[i].uuid] = arr[i]
        }

      }
      return obj
    },
    getImages(){
      let url = "https://tangled.garden/api/images/?format=json&ordering=";
      if(this.requestDirection == true){
          url += "-"
      }
      url += this.requestType

      this.axios.get(url).then((response) => { // possible race condition on fast type / direction change
        console.log(response.data)
        this.responseJson = this.arrayToObject(response.data)
      })


    }
  },
  computed:{
    images(){
      return this.responseJson;
    }
  },
  mounted(){
    this.getImages();
  }
}
</script>

<style lang="scss" scoped>
.ul{
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: flex-start;
  align-items: stretch;
  align-content: flex-start;
}
</style>
