<template>
  <div class="noscroll">
    <panel title="Create Task">
      <v-text-field
        :rules="[rules.required]"
        label="Task Name"
        v-model="task.name"
        color="green accent-4"
      >
      </v-text-field>
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        lazy
        offset-y
        min-width="290px"
      >
      <template v-slot:activator="{ on }">
        <v-text-field
          readonly
          v-model="task.date"
          label="Due Date"
          :rules="[rules.required]"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        no-title
        v-model="task.date"
        @input="menu = false"
      >
      </v-date-picker>
      </v-menu>
      <v-text-field
        label="Description"
        v-model="task.description"
        color="green accent-4"
      >
      </v-text-field>
      <v-select
        :rules="[rules.required]"
        :items="getClassNames"
        v-model="task.class"
        dense
        label="Class"
      >
      </v-select>
      <v-radio-group
        :rules="[rules.required]"
        label="Difficulty Level: "
        v-model="task.difficulty"
        row
      >
        <v-radio label="Very Easy" value="0.2"></v-radio>
        <v-radio label="Not bad" value="0.4"></v-radio>
        <v-radio label="Probably Hard" value="0.6"></v-radio>
        <v-radio label="Difficult" value="0.8"></v-radio>
        <v-radio label="Extreme" value="1"></v-radio>
      </v-radio-group>
      <v-btn outline color="green accent-4"
        @click="add">
        ADD
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
      task: {
        name: '',
        description: '',
        class: '',
        date: this.date,
        difficulty: 0,
        isDone: false
      },
      rules: {
        required: value => !!value || 'Required.'
      }
    }
  },
  methods: {
    async add () {
      try {
        await TasksService.addTask(this.task)
        this.navigateTo({name: 'tasks'})
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    this.classes = (await ClassesService.index()).data
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
