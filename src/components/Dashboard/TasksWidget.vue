<template lang="pug">
  .tasks-widget
    .header
      .title Задачи
      .spacer
      .period
        .period-variant(:class='{ "active": period == 1 }' @click='period = 1') Сегодня
        .period-variant(:class='{ "active": period == 2 }' @click='period = 2') Неделя
        .period-variant(:class='{ "active": period == 3 }' @click='period = 3') Месяц
    .list
      .task(v-for='task in tasks')
        .name {{task.name}}
        .deadline {{task.deadline}}
</template>
<script>
export default {
  data(){
    return {
      period: 1,
      tasks: [
        {
          name: 'Уникальная задача в своем роде',
          deadline: "01.12.2019"
        },{
          name: 'Уникальная задача в своем роде',
          deadline: "01.12.2019"
        },{
          name: 'Уникальная задача в своем роде',
          deadline: "01.12.2019"
        },{
          name: 'Уникальная задача в своем роде',
          deadline: "01.12.2019"
        },
      ]
    }
  }
}
</script>
<style lang="sass" scoped>
.tasks-widget
  border-radius: 10px
  box-shadow: 0 0 10px rgba(0,0,0,.1)
  background: #fff
  padding: 15px 25px
  .list
    margin-top: 16px
    .task
      display: flex
      height: 45px
      padding: 0 16px
      border-bottom: 1px solid #ecf2fb
      justify-content: space-between
      align-items: center
      &:last-child
        border-bottom: 0px
  .header
    display: flex
    width: 100%
    align-items: center
    font-size: 12px
    .spacer
      flex: 1
    .period
      display: flex
      align-items: center
      .active
        background: #E8EFFB !important
      &-variant
        margin: 0 10px
        border-radius: 10px
        padding: 10px 15px
        transition: background .3s
        &:hover
          background: #ecf2fb
          cursor: pointer
</style>