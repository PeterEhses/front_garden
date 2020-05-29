<template>
  <div class="gallery">
    <p>gallery boii</p>
    <ul>
      <li v-for="img in images" v-bind:key="img.id">
        <img v-lazy="img.src" >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:"careGallery",
  data: function(){
    return{
      responseJson: {}
    }

  },
  methods:{
    async getImages(){
      console.log("hi");
      const proxyurl = "https://cors-anywhere.herokuapp.com/"; // for cors policy error
      const url = "https://tangled.garden/api/images";
      const newurl = proxyurl + url;
      console.log(newurl);
      try{
        this.$http.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
        const { returned } = await this.$http.post(newurl);
        console.log("something");
        console.log(returned);
        this.responseJson = returned;
      } catch (err) {
        console.log("something else");
        console.error(err);
      }

    }
  }, computed:{
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
</style>
