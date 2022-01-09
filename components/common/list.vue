<template>
  <div>
    <template v-if='items.length'>
      <div v-for="(item, index) in items" :key="index">
        <h3>{{item.name}}</h3>
        <ul>
          <li>{{item.position}}</li>
          <li>{{item.team}}</li>
        </ul>
      </div>
    </template>

    <template v-else>
      <p>表示するデータがありません</p>
    </template>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'List',
  data() {
    return {
      sample: 'ぐらふきゅえる'
    }
  },
  props: {
    items: {
      type: Array,
      default: [],
      required: true
    },
  }
})
</script>