<template lang="pug">
.modal
  DocPreview
  .departments
    .part(v-for='(dead, deadInd) in process.parts' :style='{ minWidth: getWidth(deadInd)*34 + "px"}') 
      .department(v-for='dep in getDep(dead)' :style='{ width: getWidth(deadInd)*34 + "px", background: getBg(dep.status) }') {{dep.name}}
    //- .dep(v-for='(d, index) in processTasks' :style='{ minWidth: 1/processTasks.length * 100 + "%", background: getBg(d.status) }' @click='openDep(d.name)') {{d.name}}
  transition(enter-active-class="animated fadeIn" leave-active-class="animated fadeOut")
    .inner(v-if='actualDep != null' :key='task')
      .info
        .inner-info
          .header
            span {{task.task}}
            .spacer
            i.material-icons(@click='$router.back()') close
          a-button.btn(@click='$store.commit("openDocPreview")' size='small') Просмотр документа
          .headline-inner Дедлайн
          .text 03.06.2019
          .headline-inner Статус
          .text Отклонен
          .headline-inner Описание
          .text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        a-progress.prog(type="dashboard" :percent="75")
        a-progress.prog(type="dashboard" :percent="32" status="exception")
      .users
        .headline Департаменты основного этапа
        transition(enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown")
          .inner-info(v-if='isInfo')
            .header
              span Задача
              .spacer
              i.material-icons(@click='closeInfo') close
            a-button.btn(@click='$store.commit("openDocPreview")' size='small') Просмотр документа
            .headline-inner Дедлайн
            .text 03.06.2019
            .headline-inner Статус
            .text Отклонен
            .headline-inner Описание
            .text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        transition-group(name="flip-list" leave-active-class="animated fadeOutRight" enter-active-class="animated fadeInRight")
          .user(@click='openUser', v-for='(user, index) in taskDeps' :style='{ top: index * 24 + 59 + (index * 32) + "px" }' :key='user.name')
            i.material-icons.icon.green(v-if='user.status == "success"') done
            i.material-icons.icon.red(v-else) close
            span {{user.name}}
      .users
        .headline(v-if='isUserTwo') Департаменты подэтапа
        .user(v-if='isUserTwo' @click='openUser', v-for='user in dep.users')
          i.material-icons.icon.green(v-if='user.status == "success"') done
          i.material-icons.icon.red(v-else) close
          span {{user.name}}
</template>
<script>
import DocPreview from '@/components/DocPreview'
import _ from 'lodash'
export default {
  components: { DocPreview },
  methods: {
    getDep() {

    },
    getWidth() {
      
    },
    closeInfo() {
      this.isUserTwo = false
      this.isInfo = false
      this.dep.users =[
        {
          name: "Департамент финансов москвы",
          status: 'success',
          docs: "123"
        },{
          name: "Департамент внешнеэкономических и международных связей города Москвы",
          status: 'success',
          docs: "123"
        },{
          name: "Планово-экономический отдел ГАДФД",
          status: 'fail',
          docs: "123"
        },
      ]
    },
    openDep(ind) {
      this.actualDep = ind
    },
    openUser(){
      this.isUserTwo = true
      this.isInfo = true
      this.dep.users = this.dep.users.filter(d => d.name == "Департамент 4")
    },
    getBg(status) {
      switch(status) {
        case "fail":
          return "#EF5350"
        case "done":
          return "#d7d7d7"
        default:
          return "#BDBDBD"
      }
    },
  },
  computed: {
    allDaysD() {
      return this.departments.reduce((sum, v) => sum + v.days, 0)
    },
    process(){
      const { data } = this.$store.state
      const d = data [this.$route.params.id]
      return {
        name: d.name,
        parts: Object.keys(d.tasks).sort(function(a,b){
          return new Date(a) - new Date(b);
        }),
        start: 0
      }
    },
    processTasks(){
      const keys = Object.keys(this.process).filter(v => v!="name"&&v!="deadline")
      let items = _.uniqBy(keys.map(k => ({
        name: this.process[k].name,
        status: null
      })), "name")
       
      return items
    },
    taskDeps() {
      const keys = Object.keys(this.process).filter(v => v!="name"&&v!="deadline"&&this.process[v].name == this.task.task)
      let items = keys.map(k => ({
        name: k,
        status: null
      }))
       
      return items
    },
    task() {
      if(this.actualDep) {
        return this.processDeps.filter(d => d.task == this.actualDep)[0]
      }
      return {
        name: ""
      }
    },
    processDeps() {
      const keys = Object.keys(this.process).filter(v => v!="name"&&v!="deadline")
      return keys.map( k => ({
        name: k,
        task: this.process[k].name
      }) )
    }
  },
  data(){
    return {
      isInfo: false,
      isUserTwo: false,
      actualDep: null,
      departments: [
        {
          name: 'Department 1',
          status: "done",
          days: 10,
          users: [
            {
              name: "Департамент 2",
              status: 'success',
              docs: "123"
            },{
              name: "Департамент 3",
              status: 'success',
              docs: "123"
            },{
              name: "Департамент 4",
              status: 'success',
              docs: "123"
            },{
              name: "Департамент 5",
              status: 'fail',
              docs: "123"
            },
          ]
        },{
          name: 'Department 2',
          status: "fail",
          days: 12
        },{
          name: 'Department 3',
          status: "actual",
          days: 13
        },{
          name: 'Department 4',
          status: null,
          days: 14
        },
      ],
      dep: {
        name: 'Department 1',
        status: "fail",
        days: 10,
        users: [
          {
            name: "Департамент финансов москвы",
            status: 'success',
            docs: "123"
          },{
            name: "Департамент внешнеэкономических и международных связей города Москвы",
            status: 'success',
            docs: "123"
          },{
            name: "Планово-экономический отдел ГАДФД",
            status: 'fail',
            docs: "123"
          },
        ]
      }
    }
  }
}
</script>
<style lang="sass" scoped>
.modal
  display: flex
  flex-direction: column
  height: calc(100% - 48px)
  max-width: calc(100vw - 348px)
  border-radius: 10px
  box-shadow: 0 0 10px rgba(0,0,0,.1)
  background: #fff
  padding: 15px 25px
  .departments
    display: flex
    width: 100%
    min-height: 60px
    margin-bottom: 32px
    border-radius: 10px
    overflow: hidden
    .dep
      display: flex
      align-items: center
      justify-content: center
      border-right: 1px solid #fff
      transition: opacity .3s
      font-size: 11px
      text-align: center
      &:hover
        cursor: pointer
        opacity: .8
      &:last-child
        border-right: 0
  .headline
    font-weight: 500
    font-size: 18px
  .inner
    flex: 1
    display: flex
  .info
    flex: 1
    padding-right: 16px
    border-right: 1px solid #e8e8e8
    .prog
      margin-top: 16px
      margin-right: 16px
    .btn
      margin-bottom: 16px
    .headline 
      font-weight: 500
      font-size: 18px
    .text
      margin-top: 8px
      margin-bottom: 32px
  .inner-info
    border-radius: 10px
    box-shadow: 0 0 10px rgba(0,0,0,.2)
    background: #fff
    width: 90%
    left: 5%
    padding: 15px 25px
    .header
      display: flex
      align-items: center
      margin-bottom: 16px
      .material-icons
        &:hover
          cursor: pointer
      span
        font-weight: 500
        font-size: 20px
      .spacer
        flex: 1
    .btn
      margin-bottom: 16px
    .headline-inner
      font-weight: 500
      font-size: 18px
    .text
      margin-top: 8px
      margin-bottom: 16px
  .info
    .inner-info
      width: 100%
  .users
    flex: 1
    padding-right: 16px
    border-right: 1px solid #e8e8e8
    position: relative
    .inner-info
      position: absolute
      bottom: 0
    .headline 
      font-weight: 500
      font-size: 18px
      margin-left: 32px
      margin-bottom: 32px
    .user
      position: absolute
      transition: transform 1s
      margin-left: 32px
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
        margin-right: 16px
  .users-2nd
    flex: 1
    .headline 
      font-weight: 500
      font-size: 18px
      margin-left: 32px
      margin-bottom: 32px
    .user
      margin-left: 32px
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
        margin-right: 16px
</style>