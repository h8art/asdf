<template lang='pug'>
  #app
    toolbar
    task-viewer
    .main-cont
      sidebar
      .router
        transition(mode='out-in' enter-active-class="animated fadeIn" leave-active-class="animated fadeOut")
          router-view
</template>
<script>
import Toolbar from '@/components/Toolbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import TaskViewer from '@/components/TaskViewer/index.vue'

export default {
  components: { Toolbar, Sidebar, TaskViewer }
}
</script>
<style lang="sass">
.flip-list-move
  transition: transform 1s
body
  margin: 0
  font-family: "Rubik"
.main-cont
  background: #f5f9ff
  height: calc(100vh - 60px)
  display: flex
  .router
    height: 100%
    flex: 1
    padding-top: 48px
    padding-right: 32px
    box-sizing: border-box
</style>
