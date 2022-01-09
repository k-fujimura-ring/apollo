<template>
<div>
  <h1>選手一覧⚽️</h1>
  <List :items="items"></List>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import List from '@/components/common/list.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    List
  },
  data() {
    return {
      items: [
        {
          position: 'FW',
          name: 'メッシ',
          team: 'パリサンジェルマン',
        },
        {
          position: 'FW',
          name: 'クリスティアーノ・ロナウド',
          team: 'マンチェスターユナイテッド',
        },
        {
          position: 'FW',
          name: 'トーマス・三浦',
          team: 'バイオリンミュンヘン',
        }
      ]
    }
  }
})
</script>