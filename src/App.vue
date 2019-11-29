<template lang='pug'>
  #app
    toolbar
    .main-cont
      sidebar
      .router
        router-view
</template>
<script>
import Toolbar from '@/components/Toolbar.vue'
import Sidebar from '@/components/Sidebar.vue'
export default {
  components: { Toolbar, Sidebar }
}
</script>
<style lang="sass">
body
  margin: 0
  font-family: "Rubik"
.main-cont
  background: #f5f9ff
  height: calc(100vh - 60px)
  display: flex
  .router
    height: 100%
    padding-top: 48px
    box-sizing: border-box
</style>
