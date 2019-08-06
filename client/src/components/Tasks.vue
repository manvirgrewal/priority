<template>
  <div class="noscroll">
    <panel title="Tasks">
      <v-layout>
      <h2 class="display-1 success--text pl-3">
        Tasks:&nbsp;
        <v-fade-transition leave-absolute>
          <span :key="`tasks-${tasks.length}`">
              {{ tasks.length }}
            </span>
        </v-fade-transition>
      </h2>
      <v-spacer>
      </v-spacer>
      <v-btn
        fab
        small
        depressed
        color="primary"
        @click="navigateTo('create-task')"
      >
        <v-icon dark>add</v-icon>
      </v-btn>
      </v-layout>
      <v-divider class="mt-3"></v-divider>
      <v-layout
        my-1
        align-center
      >
        <strong class="mx-3 info--text">
          Remaining: {{ remainingTasks }}
        </strong>
        <strong class="mx-3">
          Completed: {{ completedTasks }}
        </strong>

        <v-spacer>
        </v-spacer>

        <v-progress-circular
          :value="progress"
          class="mr-2"
          color="secondary"
        >
        </v-progress-circular>
      </v-layout>

      <v-divider class="mb-3">
      </v-divider>

      <v-card v-if="tasks.length > 0">
        <v-slide-y-transition
          class="py-2"
          group
          tag="v-list"
        >
        <template v-for="task in tasks">
          <v-list-tile :key="task.id">
            <v-list-tile-action>
              <v-checkbox
                v-model="task.isDone"
                color="secondary"
              >
                <template v-slot:label>
                  <div
                    :class="task.isDone && 'grey--text' || 'text--primary'"
                    class="tasktext"
                    v-text="task.name"
                  >
                  </div>
                </template>
              </v-checkbox>
            </v-list-tile-action>
              <v-btn
                small
                fab
                light
                flat
                @click="navigateTo(
                  {
                    name: 'task',
                    params: {taskId: task.id}
                  }
                )"
              >
                <v-scroll-x-transition>
                  <v-icon large color="primary">chevron_right</v-icon>
                </v-scroll-x-transition>
              </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              medium
              fab
              light
              flat
              color="primary"
              @click="deleteTask(task)"
            >
            <v-icon dark>delete_outline</v-icon>
            </v-btn>
          </v-list-tile>
        </template>
      </v-slide-y-transition>
    </v-card>
    <!-- <v-btn outline color="green accent-4"
      @click="clearList">
      Delete All
    </v-btn> -->
  </panel>
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
  data () {
    return {
      tasks: [
      ],
      task: null
    }
  },
  async mounted () {
    this.tasks = (await TasksService.index()).data
  },
  methods: {
    clearList () {
    },
    async deleteTask (theTask) {
      try {
        await TasksService.removeTask(theTask.id)
      } catch (err) {
        console.log("Couldn't delete task.")
        console.log(err)
      }
      this.tasks.splice(this.tasks.indexOf(theTask), 1)
    }
  },
  computed: {
    completedTasks () {
      return this.tasks.filter(task => task.isDone).length
    },
    progress () {
      return this.completedTasks / this.tasks.length * 100
    },
    remainingTasks () {
      return this.tasks.length - this.completedTasks
    }
  }
}
</script>

<style scoped>
.tasktext{
  width: 100%;
  /* padding-left: 20px;
  padding-top: 10%; */
}
/* .space{
  padding-top: 10%;
} */
</style>
