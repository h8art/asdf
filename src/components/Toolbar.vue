<template lang="pug">
  .toolbar
    .logo
      img(src='/dep.jpg')
    .spacer
    .icon
      i.material-icons search
    .icon
      i.material-icons notifications_none
    .avatar
</template>
<style lang="sass" scoped>
.toolbar
  height: 60px
  display: flex
  padding: 0 48px
  align-items: center
  .spacer
    flex: 1
  .icon
    margin-right: 32px
    font-size: 42px
    color: #737273
    padding-bottom: 4px
    i
      line-height: 32px
  .logo
    height: 90%
    img
      height: 100%
  .avatar
    background: #E8EFFB
    border-radius: 50%
    width: 32px
    height: 32px
</style>