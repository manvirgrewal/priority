<template>
<div class="noscroll">
    <panel title="Details">
      <v-list>
        <v-list-tile two-line subheader>
          <v-list-tile-content>
            <v-list-tile-title>{{task.name}}</v-list-tile-title>
            <v-list-tile-sub-title>{{task.description}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile two-line subheader>
          <v-list-tile-content>
            <v-list-tile-title>Class</v-list-tile-title>
            <v-list-tile-sub-title>{{task.class}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile two-line subheader>
          <v-list-tile-content>
            <v-list-tile-title>Due Date</v-list-tile-title>
            <v-list-tile-sub-title>{{task.date}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile two-line subheader>
          <v-list-tile-content>
            <v-list-tile-title>Difficulty</v-list-tile-title>
            <v-list-tile-sub-title>{{task.difficulty}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-btn
        small
        fab
        light
        flat
        @click="navigateTo({name: 'tasks'})"
      >
        <v-scroll-x-transition>
          <v-icon large color="primary">chevron_left</v-icon>
        </v-scroll-x-transition>
      </v-btn>
      <v-btn outline color="secondary"
        @click="navigateTo({name: 'edit-task'})">
        EDIT
      </v-btn>
    </panel>
  </div>
</template>

<script>
import panel from '@/templates/Panel'
import TasksService from '@/services/TasksService'
import ClassesService from '@/services/ClassesService'
import navigation from '@/mixins/navigation'
export default {
  mixins: [navigation],
  components: {
    panel
  },
  data () {
    return {
      menu: false,
      date: new Date().toISOString().substr(0, 10),
      levels: [1, 2, 3, 4, 5],
      classes: [
      ],
      selectedClass: '',
      task: {}
    }
  },
  methods: {
    update () {
      console.log('updated!')
    }
  },
  async mounted () {
    this.classes = (await ClassesService.index()).data
    const taskId = this.$store.state.route.params.taskId
    this.task = (await TasksService.show(taskId)).data
  },
  computed: {
    getClassNames () {
      var names = []
      this.classes.forEach(item => {
        names.push(item.name)
      })
      return names
    }
  }
}
</script>
<style scoped>
</style>
