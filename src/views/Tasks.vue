<template lang="pug">
  .tasks
    .filters.card
      .title Фильтры
      .body

    .tasks.card
</template>
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
    
  .tasks
    margin-top: 48px
    flex: 1
</style>