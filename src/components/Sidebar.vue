<template lang="pug">
  .sidebar
    router-link.menu-link(to='/dashboard' tag='div')
      i.material-icons dashboard
      span Дашборд
    router-link.menu-link(to='/tasks' tag='div')
      i.material-icons view_list
      span Задачи
    router-link.menu-link(to='/projects' tag='div')
      i.material-icons work
      span Проекты
    router-link.menu-link(to='/calendar' tag='div')
      i.material-icons calendar_today
      span Календарь
</template>
<style lang="sass" scoped>
.sidebar
  width: 300px
  padding-top: 32px
  display: flex
  flex-direction: column
  align-items: center
  .menu-link
    margin-top: 16px
    width: 200px
    box-sizing: border-box
    padding: 12px 15px
    display: flex
    align-items: center
    color: #959696
    border-radius: 10px
    transition: all .3s
    &:hover
      background: #ecf2fb
      color: #85a3d2
      cursor: pointer
    i
      font-size: 18px
    span
      margin-left: 20px
      font-size: 18px
      font-weight: 300
  .router-link-active
    background: #E8EFFB !important
    color: #678CC7 !important
</style>