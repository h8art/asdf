<template lang="pug">
  .timeline
    .headline График первого этапа
    .inner
      a-timeline
        a-timeline-item(color='green') 2015-09-01
        a-timeline-item(color='green') 2015-09-01
        a-timeline-item(color='red') 2015-09-01
    .headline График второго этапа
    .inner
      a-timeline
        a-timeline-item(color='green') 2015-09-01
        a-timeline-item(color='green') 2015-09-01
        a-timeline-item(color='red') 2015-09-01
    .headline График третьего этапа
    .inner
      a-timeline
        a-timeline-item(color='green') 2015-09-01
        a-timeline-item(color='green') 2015-09-01
        a-timeline-item(color='red') 2015-09-01
        
</template>
<style lang="sass" scoped>
.timeline
  height: 100%
  border-radius: 10px
  box-shadow: 0 0 10px rgba(0,0,0,.1)
  background: #fff
  padding: 15px 25px
  display: flex
  flex-direction: column
  .headline
    font-size: 12px
  .inner
    flex: 1
    padding-top: 32px
    display: flex
    justify-content: center
</style>