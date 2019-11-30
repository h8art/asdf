import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    docViwerDrawer: false,
    tasks: [
      {
        name: "Название задачи",
        deadline: "02.12.2019"
      },{
        name: "Название задачи",
        deadline: "02.12.2019"
      },{
        name: "Название задачи",
        deadline: "02.12.2019"
      },
    ],
    showTaskId: null,
    showTask: false
  },
  getters: {
    task(state) {
      const { showTaskId, tasks } = state
      if (showTaskId != null) {
        return tasks[showTaskId]
      }else return {
        name: "",
        deadline: ""
      }
    } 
  },
  mutations: {
    closeViewer(state) {
      state.showTask = false
    },
    openViewer(state, taskIndex) {
      state.showTaskId = taskIndex
      state.showTask = true
    },
    openDocPreview(state) {
      state.docViwerDrawer = true
    },
    closeDocViewer(state) {
      state.docViwerDrawer = false
    }
  },
  actions: {
  },
  modules: {
  }
})
