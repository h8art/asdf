<template lang="pug">
  .toolbar
    .logo
      img(src='/sires.svg')
    .spacer
    .icon
      i.material-icons search
    a-popover(placement='bottom')
      template(slot='content')
        p Content
        p Content
      template(slot='title')
        span Title
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
    height: 50%
    img
      height: 100%
  .avatar
    background: #E8EFFB
    border-radius: 50%
    width: 32px
    height: 32px
</style>