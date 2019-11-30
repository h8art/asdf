<template lang="pug">
.graph 
  a-modal(:title='dep.name', v-model='isOpenDep', :footer="null" :width='1000')
    .modal
      DocPreview
      .info
        a-button.btn(@click='$store.commit("openDocPreview")') Просмотр документа
        .headline Дедлайн
        .text 03.06.2019
        .headline Статус
        .text Отклонен
        .headline Описание
        .text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      .users
        .headline Подэтап 1
        a-tooltip(v-for='user in dep.users' :title='user.docs')
          .user(@click='isUserTwo = true')
            span {{user.name}}
            i.material-icons.icon.green(v-if='user.status == "success"') done
            i.material-icons.icon.red(v-else) close
      .users-2nd
        .headline(v-if='isUserTwo')  Подэтап 2
        a-tooltip(v-if='isUserTwo' v-for='user in dep.users' :title='user.docs')
          .user(@click='isUserTwo = true')
            span {{user.name}}
            i.material-icons.icon.green(v-if='user.status == "success"') done
            i.material-icons.icon.red(v-else) close
  .graph-sidebar
    .task(v-for='task in tasks') {{task.name}}
  .body
    .header
      .months
        .month(v-for='(month, index) in months')
          span {{month}}
          .days
            .day(v-for='day in getDays(index)') {{day}}
    .inner
      .task(v-for='(task, taskInd) in tasks' :style='{ paddingLeft: task.start*34 + "px" }')
        .department(v-for='(dep, depInd) in task.departments' :style='{ minWidth: dep.days*34 + "px", background: getBg(dep.status) }' @click='openDep(depInd, taskInd)') {{dep.name}}
</template>
<script>
import getDaysInMonth from 'date-fns/getDaysInMonth'
import DocPreview from '../components/DocPreview'

export default {
  components: {DocPreview},
  data(){
    return {
      isOpenDep: false,
      isUserTwo: false,
      depInd: null,
      taskInd: null,
      tasks: [
        {
          name: 'Задача 1',
          start: 10,
          departments: [
            {
              name: 'Department 1',
              status: null,
              days: 15
            },{
              name: 'Department 2',
              status: 'done',
              days: 19
            },{
              name: 'Department 3',
              status: null,
              days: 20
            },{
              name: 'Department 4',
              status: null,
              days: 10
            },
          ]
        },{
          name: 'Задача 2',
          start: 13,
          departments: [
            {
              name: 'Department 1',
              status: "fail",
              days: 10,
              users: [
                {
                  name: "Департамент",
                  status: 'success',
                  docs: "123"
                },{
                  name: "Департамент",
                  status: 'success',
                  docs: "123"
                },{
                  name: "Департамент",
                  status: 'success',
                  docs: "123"
                },{
                  name: "Департамент",
                  status: 'fail',
                  docs: "123"
                },
              ]
            },{
              name: 'Department 2',
              status: null,
              days: 12
            },{
              name: 'Department 3',
              status: null,
              days: 13
            },{
              name: 'Department 4',
              status: null,
              days: 14
            },
          ]
        }
      ]
    }
  },
  computed: {
    dep(){
      const { depInd, taskInd, tasks } = this
      if(depInd != null && taskInd != null) {
        return tasks[taskInd].departments[depInd]
      }else{
        return {
          name: '',
          status: null
        }
      }
    },
    months(){
      const months = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']
      return months
    }
  },
  methods: {
    openDep(ind, taskInd) {
      if(this.tasks[taskInd].departments[ind].status == "fail") {
        this.depInd = ind
        this.taskInd = taskInd
        this.isOpenDep = true
      }
    },
    getBg(status) {
      switch(status) {
        case "done":
          return "#66BB6A"
        case "fail":
          return "#EF5350"
        default:
          return "#BDBDBD"
      }
    },
    getDays(ind) {
      return getDaysInMonth(new Date(1,ind,2019))
    }
  }
}
</script>
<style lang="sass" scoped>
.modal
  display: flex
  .info
    flex: 1
    padding-right: 16px
    border-right: 1px solid #e8e8e8
    .btn
      margin-bottom: 16px
    .headline 
      font-weight: 500
      font-size: 18px
    .text
      margin-top: 8px
      margin-bottom: 32px
  .users
    flex: 1
    padding-right: 16px
    border-right: 1px solid #e8e8e8
    .headline 
      font-weight: 500
      font-size: 18px
      margin-left: 32px
      margin-bottom: 32px
    .user
      margin-left: 100px
      margin-bottom: 32px
      display: flex
      width: fit-content
      align-items: center
      &:hover
        cursor: pointer
      .green
        color: #43A047
      .red
        color: #E53935
      .icon
        margin-left: 16px
  .users-2nd
    flex: 1
    .headline 
      font-weight: 500
      font-size: 18px
      margin-left: 32px
      margin-bottom: 32px
    .user
      margin-left: 100px
      margin-bottom: 32px
      display: flex
      width: fit-content
      align-items: center
      &:hover
        cursor: pointer
      .green
        color: #43A047
      .red
        color: #E53935
      .icon
        margin-left: 16px
.graph 
  display: flex
  height: calc(100% - 48px)
  max-width: calc(100vw - 348px)
  border-radius: 10px
  box-shadow: 0 0 10px rgba(0,0,0,.1)
  background: #fff
  padding: 15px 25px
  &-sidebar
    padding-top: 61px
    width: 200px
    .task
      height: 60px
      display: flex
      align-items: center
      margin-bottom: 16px
  .header
    .months
      display: flex
      white-space: nowrap
      text-align: center
      .month
        // border-top: 1px solid #000
        // border-right: 1px solid #000
        span
          font-weight: 500
          font-size: 14px
        &:last-child
          border-right: 0
      .days
        display: flex
        white-space: nowrap
        margin-top: 10px
        // border-top: 1px solid #000
        // border-bottom: 1px solid #000
        .day
          border-right: 1px solid #e9e9e9
          width: 34px
          position: relative
          &:after
            content: ''
            position: absolute
            z-index: 0
            top: 100%
            right: -1px
            height: 710px
            width: 1px
            background: #e9e9e9
  .inner
    height: calc(100% - 52px)
    padding-top: 16px
    .task
      width: 100%
      height: 60px
      display: flex
      position: relative
      z-index: 10
      white-space: nowrap
      margin-bottom: 16px
      .department
        height: 100%
        display: flex
        align-items: center
        justify-content: center
        border-right: 1px solid #fff
        transition: transform .3s
        &:hover
          cursor: pointer
          transform: scale(1.1)
        &:last-child
          border-right: none
  .body
    // border-left: 1px solid #000
    // border-right: 1px solid #000
    // border-bottom: 1px solid #000
    flex: 1
    height: 100%
    overflow: auto
</style>