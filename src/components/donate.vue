<template>
  <div id="donate">
  <p>Welcome to the garden of tangled data.</p>
    <p>Please plant pieces of data.</p>
    <p>You can also forward emails to <a href="mailto:donate@tangled.garden" target="_blank" rel="noopener noreferrer" @click="movietime">donate@tangled.garden</a> or use the scanner device.</p>
    <donation-form @submitted="movietime"/>
    {{minsremain}}:{{secsremain}}min
  </div>
</template>

<script>
import donationForm from './donationForm.vue';
export default {
  name: "donate",
  components: {
    "donation-form": donationForm
  },
  data(){
    return{
      seconds: 0,
      playtime: 3*60,
      startseconds: 0,
    }
  },
  computed: {
    timeremain(){
      return this.playtime-(this.seconds-this.startseconds)
    },
    secsremain(){

      return this.leadzero(this.timeremain%60, 2);
    },
    minsremain(){
      return this.leadzero(Math.floor(this.timeremain/60), 2);
    }
  },
  methods: {
    leadzero(num, size){
      num = num+"";
      while (num.length < size) num = "0" + num;
      return num;
    },
    movietime(){
      this.startseconds = this.countdown()

      console.log("movietime")
    },
    endplay(){
      console.log("boi ended")
    },
    countdown(relative = false){
      let seconds = Math.floor((Date.now() / 1000));
      if(relative && this.timeremain <= 0){
        this.endplay()
      } else {
        console.log(seconds, this.startseconds)
        let _this = this;
        setTimeout(function(){_this.countdown(true)}, 1000);
      }
      this.seconds = seconds;

      return seconds;


    }
  }
}
</script>

<style lang="scss" scoped>
</style>
