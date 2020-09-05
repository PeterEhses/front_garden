<template>
  <div id="donate">
  <p>Welcome to the garden of tangled data.</p>
    <p>Please plant pieces of data.</p>
    <p>You can also forward emails to <a href="mailto:donate@tangled.garden" target="_blank" rel="noopener noreferrer" @click="movietime">donate@tangled.garden</a> or use the scanner device.</p>
    <donation-form @submitted="movietime"/>

    <Modal v-if="startplay" noclose overflow="hidden">
      <div class="video">

        <video autoplay="true" loop="true" preload="auto">

            <source src="@/assets/leaf_breath.webm"
                    type="video/webm">

            Sorry, your browser doesn't support embedded videos. Continue to "care" from the side menu.
            <br/><br/><br/><br/><br/>
        </video>
        <p>{{minsremain}}:{{secsremain}}<br/>you'll be redirected</p>
      </div>


    </Modal>
  </div>
</template>

<script>
import donationForm from './donationForm.vue';

import Modal from '@/components/Modal.vue';
export default {
  name: "donate",
  components: {
    "donation-form": donationForm,
    Modal
  },
  data(){
    return{
      seconds: 0,
      playtime: .2*60,
      startseconds: 0,
      startplay: false,
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
      this.startplay = true;
      console.log("movie play")
    },
    endplay(){
      console.log("movie ended")
      this.startplay = false;
      this.$router.push('care')
    },
    countdown(relative = false){
      let seconds
      if(relative && this.timeremain <= 0){
        this.endplay()
      } else {
        seconds = Math.floor((Date.now() / 1000));
        console.log(seconds, this.startseconds)
        let _this = this;
        setTimeout(function(){_this.countdown(true)}, 1000);
        this.seconds = seconds;
      }


      return seconds;


    }
  }
}
</script>

<style lang="scss" scoped>

.video{
  top: 1px;
  left: 1px;
  position: relative;
  overflow: hidden;
  //background: red;
  height: calc(100% - 1px);
  width: calc(100% - 1.5px);
  border-radius: 0 0 1.5*$frame-constant 0;
  video{
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);

    overflow: hidden;
    height: 100%;
    width: auto;
  }
  p{
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    padding: .5em 1em;
    border-radius: 12345px;
    border: $outline-weight solid $highlight-default;
    box-sizing: border-box;
    background: rgba(27, 27, 27, .5);
  }
}
</style>
