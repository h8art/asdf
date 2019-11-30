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
    
</template>
<script>
import getDaysInMonth from 'date-fns/getDaysInMonth'

export default {
  data(){
    return {
      tasks: [
        {
          name: 'Задача 1'
        }
      ]
    }
  },
  computed: {
    months(){
      const months = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']
      return months
    }
  },
  methods: {
    getDays(ind) {
      return getDaysInMonth(new Date(1,ind,2019))
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
    padding-top: 45px
    width: 200px
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
          border-right: 1px solid #000
          width: 34px
          &:last-child
            border-right: 0
  .body
    // border-left: 1px solid #000
    // border-right: 1px solid #000
    // border-bottom: 1px solid #000
    flex: 1
    height: 100%
    overflow: auto
</style>