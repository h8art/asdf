<template lang="pug">
  .dash
    .stats
      stat.stat(v-for='item in stats' :title='item.title' :count='item.count' :all='item.all' :icon='item.icon')
    .row
      .tasks
        TasksWidget
</template>
<script>
import TasksWidget from './TasksWidget.vue'
import Stat from './Stat.vue'

export default {
  data() {
    return {
      stats: [
        {
          title: "Выполненные задачи",
          icon: "/completed.svg",
          count: 9,
          all: 32
        },{
          title: "Задачи в работе",
          icon: "/pending.svg",
          count: 20,
          all: 32
        },{
          title: "Задачи в работе",
          icon: "/pending.svg",
          count: 20,
          all: 32
        },{
          title: "Задачи в работе",
          icon: "/pending.svg",
          count: 20,
          all: 32
        },
      ]
    }
  },
  components: {
    Stat,
    TasksWidget
  }
}
</script>
<style lang="sass" scoped>
.dash
  padding: 0 16px
.stats
  display: flex
  justify-content: space-between
  width: 100%
.row
  margin-top: 48px
</style>