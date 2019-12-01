<template lang="pug">
  .tasks
    .filters.card
      .title Фильтры
      .body
        a-select.select(defaultvalue='lucy', style='width: 120px', @change='handleChange')
          a-select-option(value='jack') Jack
          a-select-option(value='lucy') Lucy
        a-select.select(defaultvalue='lucy', style='width: 120px', @change='handleChange')
          a-select-option(value='jack') Jack
          a-select-option(value='lucy') Lucy
        a-select.select(defaultvalue='lucy', style='width: 120px', @change='handleChange')
          a-select-option(value='jack') Jack
          a-select-option(value='lucy') Lucy
    .tasks.card
      router-link.task(v-for='(task, index) in tasks' @click='openTask(index)' tag='div' to='/process')
        .name {{task.name}}
        .deadline {{task.deadline}}
        a-button-group
          a-button(size='small') Задачи
          a-button(size='small') Таймлайн
          a-button(size='small') Инфо
</template>
<script>
export default {
  methods: {
    openTask(ind) {
      this.$store.commit('openViewer', ind)
    }
  },
  computed: {
    tasks() {
      return this.$store.state.tasks
    }
  }
}
</script>
<style lang="sass" scoped>
.tasks
  padding: 0 16px
  height: calc(100% - 48px)
  flex-direction: column
  display: flex
  .card
    border-radius: 10px
    box-shadow: 0 0 10px rgba(0,0,0,.1)
    background: #fff
    padding: 15px 25px
    .title
      font-weigh: 600
      font-size: 12px
  .filters
    .body
      margin-top: 16px
      .select
        margin-right: 16px
  .tasks
    margin-top: 48px
    flex: 1
    .task
      display: flex
      height: 45px
      padding: 0 16px
      border-bottom: 1px solid #ecf2fb
      justify-content: space-between
      align-items: center
      transition: background .3s
      &:hover
        background: #ecf2fb
        cursor: pointer
      &:last-child
        border-bottom: 0px
</style>