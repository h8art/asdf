<template lang="pug">
  .dash
    stat.stat(v-for='item in stats' :title='item.title' :count='item.count' :all='item.all' :icon='item.icon')
    .tasks
      TasksWidget
    .timeline
      Timeline
</template>
<script>
import TasksWidget from './TasksWidget.vue'
import Stat from './Stat.vue'
import Timeline from './Timeline.vue'

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
    TasksWidget,
    Timeline
  }
}
</script>
<style lang="sass" scoped>
.dash
  padding: 0 16px
  display: grid
  grid-template-rows: 140px 1fr 1fr 1fr
  grid-template-columns: 1fr 1fr 1fr 1fr
  grid-gap: 24px
.tasks
  grid-row-start: 2
  grid-column-start: 1
  grid-row-end: 2
  grid-column-end: 4
.timeline
  grid-row-start: 2
  grid-column-start: 4
  grid-row-end: 4
  grid-column-end: 5
.stats
  width: 100%
.row
  margin-top: 48px
</style>