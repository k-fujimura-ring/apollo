<template>
<div>
  <h1>開催予定地</h1>
  <p v-if="field">{{field.name}} / ({{field.country}})</p>
  <p v-else>Loading...</p>
  <h1>参加予定選手⚽️</h1>
  <List v-if="players" :items="players"></List>
  <p v-else>Loading...</p>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import List from '@/components/common/list.vue'
import getPlayers from '@/apollo/queries/player/getPlayers.gql'
import 'vue-apollo'
import getField from '@/apollo/queries/field/getField.gql'

interface Player {
  name: string
  position: string
  team: string
}

interface Field {
  name: string
  country: string
}

interface Data {
  players: Array<Player> | null
  field: Field | null
}

export default Vue.extend({
  name: 'IndexPage',
  components: {
    List
  },
  data() :Data {
    return {
      players: null,
      field: null,
    }
  },
  apollo: {
    players: {
      query: getPlayers
    },
    field: {
      query: getField
    }
  },
  mounted() {
    this.$apollo.query({
      query: getPlayers,
    }).then((res) => {
      console.log('res', res)
    })
  }
})
</script>