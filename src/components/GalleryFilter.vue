<template>
<div class="filter">
  <div class="type">
    <clock-outline :class="type == 'created_at' ? 'selected' : null" @click="updateType('created_at')"/>
    <bank-outline :class="type == 'original_created_at' ? 'selected' : null" @click="updateType('original_created_at')"/>
    <!-- <key-outline :class="type == 'uuid' ? 'selected' : null" @click="updateType('uuid')"/> -->
    <chart-sankey-variant :class="type == 'generation' ? 'selected' : null" @click="updateType('generation')"/>


  </div>
  <div class="direction">
    <arrow-down :class="direction ? 'invert' : null" @click="updateDirection()"/>
  </div>

</div>
</template>

<script>

// https://materialdesignicons.com/
// https://www.npmjs.com/package/vue-material-design-icons
import ArrowDown from 'vue-material-design-icons/ArrowDown.vue';
import KeyOutline from 'vue-material-design-icons/KeyOutline.vue';
import ChartSankeyVariant from 'vue-material-design-icons/ChartSankeyVariant.vue';
import BankOutline from 'vue-material-design-icons/BankOutline.vue';
import ClockOutline from 'vue-material-design-icons/ClockOutline.vue';
export default {
  components: {
    KeyOutline,
    ArrowDown,
    ChartSankeyVariant,
    BankOutline,
    ClockOutline
  },
  props: {
    type: {
      type: String,
      default: ""
    },
    direction: {
      type: Boolean,
      default: false
    }
  }, methods: {
    updateDirection(){
      this.$emit('directionchange', !this.direction)
    },
    updateType(newtype){

      this.$emit('typechange', newtype)
    }
  }
}
</script>

<style lang="scss" scoped>
.filter{
  margin: 2% 1.5% 0 1.5%;
  width: 97%;
  //background: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.material-design-icon{
  svg{
    margin: 0 1em;
    fill: $highlight-default;
    width: 1.5em;
    height: 1.5em;
  }
  &:hover{
    svg{

      fill: $highlight-bright;

    }
  }

  &.invert{
    svg{
      transform: rotate(180deg);
    }

  }

  &.selected{
    svg{
      fill: $white;
    }
  }
}

@media (max-width: 800px){
  .filter{
    margin: 5% 5% 0 5%;
    width: 89.9%;
  }

  .material-design-icon{
    svg{
      margin: 0 .5em;
      fill: $highlight-default;
      width: 1em;
      height: 1em;
    }
  }
}
</style>
