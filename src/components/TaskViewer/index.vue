<template lang="pug">
  a-drawer(:title='task.name', placement='right', :closable='false', @close='onClose', :visible='open' :width='500')
    .headline Дедлайн
    .text {{task.deadline}}
    .headline Статус
    .text Утвержден
    .headline Описание
    .text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</template>
<script>
export default {
  computed: {
    task() {
      return this.$store.getters.task
    },
    open() {
      return this.$store.state.showTask
    }
  },
  methods: {
    onClose() {
      this.$store.commit('closeViewer')
    }
  }
}
</script>
<style lang="sass" scoped>
.headline 
  font-weight: 500
  font-size: 18px
.text
  margin-top: 8px
  margin-bottom: 32px
</style>