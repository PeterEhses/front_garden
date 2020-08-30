<template>
  <div class="singlegalleryinner">
    {{image}}
    <img :src="image.image_file" alt="">
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object
    }
  },
  data(){
    return{

    }
  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>
.singlegalleryinner{
  width: 100%;
  height: 100%;
  background: blue;
  overflow-y: scroll;
  img{
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
