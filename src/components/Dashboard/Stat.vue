<template lang="pug">
  .cont
    .inner
      .title {{title}}
      .count {{count}}
      .progres
        .progres-inner(:style='{ width: count/all * 100 + "%" }')
    .icon
      img(:src='icon')
</template>
<script>
export default {
  props: ['count','all','title','icon']
}
</script>
<style lang="sass" scoped>
.cont
  width: 100%
  border-radius: 10px
  box-shadow: 0 0 10px rgba(0,0,0,.1)
  background: #fff
  display: flex
  padding: 15px 25px
  .inner
    flex: 1
    display: flex
    height: 100
    flex-direction: column
    justify-content: space-between
  .progres
    width: 100px
    background: #E2E2E2
    border-radius: 2px
    overflow: hidden
    height: 5px
    &-inner
      background: #8CBAE5 
      height: 5px
  .count
    font-size: 60px
    font-weigh: 600
  .title
    font-weigh: 600
    font-size: 12px
  .icon
    display: flex
    align-items: center
    height: 100%
    img
      width: 90px
</style>