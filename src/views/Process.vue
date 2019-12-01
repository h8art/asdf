<template lang="pug">
.graph
  .graph-sidebar
    .task(v-for='task in tasks') {{task.name}}
  .body
    .header
      .months
        .month(v-for='(month, index) in months')
          span {{month}}
          .days
            .day(v-for='day in getDays(index)') {{day}}
    .inner
      .task(v-for='(task, taskInd) in tasks' :style='{ paddingLeft: task.start*34 + "px" }' @click='openDep(taskInd)')
        .part(v-for='(dead, deadInd) in task.parts' :style='{ minWidth: getWidth(taskInd, deadInd)*34 + "px"}') 
          .department(v-for='dep in getDep(taskInd, dead)' :style='{ width: getWidth(taskInd, deadInd)*34 + "px", background: getBg(dep.status) }') {{dep.name}}
</template>
<script>
import getDaysInMonth from 'date-fns/getDaysInMonth'
import differenceInDays from 'date-fns/differenceInDays'
// import _ from 'lodash'
export default {
  computed: {
    tasks(){
      let list = []
      const { data } = this.$store.state
      data.forEach(d => {
        list.push({
          name: d.name,
          parts: Object.keys(d.tasks).sort(function(a,b){
            return new Date(a) - new Date(b);
          }),
          start: 0
        })
      });
      return list
    },
    dep(){
      const { depInd, taskInd, tasks } = this
      if(depInd != null && taskInd != null) {
        return tasks[taskInd].departments[depInd]
      }else{
        return {
          name: '',
          status: null
        }
      }
    },
    months(){
      const months = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']
      return months
    }
  },
  methods: {
    getWidth(taskInd, deadInd ) {
      const task = this.tasks[taskInd]
      
      if (deadInd) {
        return Math.abs(differenceInDays(new Date(task.parts[deadInd - 1]), new Date(task.parts[deadInd])))
      } else{
        return Math.abs(differenceInDays(new Date(2019, 0, 1, 0, 0), new Date(task.parts[deadInd])))
      }
    },
    getDep(ind, dead) {
      const { data } = this.$store.state
      return Object.keys(data[ind].tasks[dead]).map(taskName => ({
        name: taskName,
        status: null
      }))
    },
    openDep(ind) {
      this.$router.push('/processes/' + ind)
    },
    getBg(status) {
      switch(status) {
        case "done":
          return "#66BB6A"
        case "fail":
          return "#EF5350"
        default:
          return "#BDBDBD"
      }
    },
    getDays(ind) {
      // console.log(ind)
      return getDaysInMonth(new Date(2019, ind))
    }
  }
}
</script>
<style lang="sass" scoped>
.graph 
  display: flex
  height: calc(100% - 48px)
  max-width: calc(100vw - 348px)
  border-radius: 10px
  box-shadow: 0 0 10px rgba(0,0,0,.1)
  background: #fff
  padding: 15px 25px
  &-sidebar
    padding-top: 61px
    width: 200px
    .task
      height: 183px
      display: flex
      align-items: center
      margin-bottom: 16px
  .header
    .months
      display: flex
      white-space: nowrap
      text-align: center
      .month
        // border-top: 1px solid #000
        // border-right: 1px solid #000
        span
          font-weight: 500
          font-size: 14px
        &:last-child
          border-right: 0
      .days
        display: flex
        white-space: nowrap
        margin-top: 10px
        // border-top: 1px solid #000
        // border-bottom: 1px solid #000
        .day
          border-right: 1px solid #e9e9e9
          width: 34px
          position: relative
          &:after
            content: ''
            position: absolute
            z-index: 0
            top: 100%
            right: -1px
            height: 710px
            width: 1px
            background: #e9e9e9
  .inner
    height: calc(100% - 52px)
    padding-top: 16px
    .task
      width: 100%
      height: 183px
      display: flex
      position: relative
      z-index: 10
      white-space: nowrap
      margin-bottom: 16px
      transition: transform .3s
      .part
        &:last-child
          .department
            border-right: none
      .department
        height: 60px
        overflow: hidden
        text-overflow: ellipsis
        white-space: normal
        font-size: 12px
        padding-left: 3px
        border-right: 1px solid #fff
        margin-bottom: 1px
  .body
    // border-left: 1px solid #000
    // border-right: 1px solid #000
    // border-bottom: 1px solid #000
    flex: 1
    height: 100%
    overflow: auto
</style>