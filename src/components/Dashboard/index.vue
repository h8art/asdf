<template lang="pug">
  .dash
    stat.stat(v-for='item in stats' :title='item.title' :count='item.count' :all='item.all' :icon='item.icon')
    .tasks
      TasksWidget
    .prc
      ProcessWidget
    //- .timeline
    //-   Timeline
</template>
<script>
import TasksWidget from './TasksWidget.vue'
import Stat from './Stat.vue'
import Timeline from './Timeline.vue'
import ProcessWidget from './ProcessWidget.vue'

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
          title: "Просроченные задачи",
          icon: "/failed.svg",
          count: 20,
          all: 32
        },{
          title: "Горящие задачи",
          icon: "/fire.svg",
          count: 20,
          all: 32
        },
      ]
    }
  },
  components: {
    Stat,
    TasksWidget,
    Timeline,
    ProcessWidget
  }
}
</script>
<style lang="sass" scoped>
.dash
  padding: 0 16px
  display: grid
  height: calc(100% - 48px)
  grid-template-rows: 140px 1fr 1fr 1fr
  grid-template-columns: 1fr 1fr 1fr 1fr
  grid-gap: 24px
.prc
  grid-row-start: 2
  grid-column-start: 1
  grid-row-end: 5
  grid-column-end: 3
.tasks
  grid-row-start: 2
  grid-column-start: 3
  grid-row-end: 5
  grid-column-end: 5
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