<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex xs7>
        <panel title="Create">
          <v-text-field
            label="Task Name"
            v-model="task.name"
            color="green accent-4"
          >
          </v-text-field>
          <v-text-field
            label="Description"
            v-model="task.description"
            color="green accent-4"
          >
          </v-text-field>
          <v-text-field
            label="Class"
            v-model="task.class"
            color="green accent-4"
          >
          </v-text-field>
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="task.date"
              label="Due Date"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="task.date">
          </v-date-picker>
          </v-menu>
          <!-- <v-select
            flat
            v-model="task.difficulty"
            :items="levels"
            label="Estimated Difficulty"
          ></v-select> -->
          <v-slider
            label="Estimated Difficulty"
            v-model="task.difficulty"
            max="10"
            step="1"
            thumb-label="always"
            :thumb-size="24"
            ticks="always"
            tick-size="2"
          ></v-slider>
          <v-btn outline color="green accent-4"
            @click="add">
            ADD
          </v-btn>
        </panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import panel from '@/templates/Panel'
import TasksService from '@/services/TasksService'
import navigation from '@/mixins/navigation'
export default {
  mixins: [navigation],
  components: {
    panel
  },
  data: () => ({
    menu: false,
    date: new Date().toISOString().substr(0, 10),
    levels: [1, 2, 3, 4, 5],
    task: {
      name: '',
      description: '',
      class: '',
      date: this.date,
      difficulty: 0,
      isDone: false
    }
  }),
  methods: {
    async add () {
      try {
        await TasksService.addTask(this.task)
        //  this.navigateTo({name: 'tasks'})
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
