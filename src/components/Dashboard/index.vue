<template lang="pug">
  .dash
    .stats
      stat(v-for='item in stats' :title='item.title' :count='item.count' :all='item.all' :icon='item.icon')
</template>
<script>
import Stat from './Stat.vue'

export default {
  data() {
    return {
      stats: [
        {
          title: "Выполненные задачи",
          icon: "",
          count: 9,
          all: 32
        }
      ]
    }
  },
  components: {
    Stat
  }
}
</script>
<style lang="sass" scoped>
.dash
  padding: 0 16px
</style>