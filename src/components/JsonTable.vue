<template lang="html">
  <table>
    <tr v-for="(info, name) in srcjson" :key="name">
      <th>{{name}}</th>

        <table v-if="typeof(info)==='object' && info !== null && (!Array.isArray(info) || !info.length == 0)">
          <!-- <tr v-for="(subinfo, subname) in info" :key="subname">
            <th>{{subname}}</th>
            <td>{{subinfo}}</td>
          </tr> -->
          <JsonTable :srcjson="info"/>
        </table>
      <td v-else class="content" v-html="info || '<em>null</em>'">
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "JsonTable",
  props: {
    srcjson: {
      type: Object
    }
  },

  mounted(){
    console.dir(this.srcjson)
  }
}
</script>

<style lang="scss">
td em{
  color: $highlight-default;
  padding: 0;
  @include font-highlight(.75, $highlight-default);
}
</style>
