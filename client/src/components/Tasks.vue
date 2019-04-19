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
        class="mr-2"
        outline color="green accent-4"
        @click="navigateTo('create-task')">
        CREATE NEW TASK
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
        <template v-for="(task, i) in tasks">

          <v-divider
            v-if="i !== 0"
            :key="`${i}-divider`"
          >
          </v-divider>

          <v-list-tile :key="`${i}-${task.name}`">
            <v-list-tile-action>
              <v-checkbox
                v-model="task.isDone"
                color="info darken-3"
              >
                <template v-slot:label>
                  <div
                    :class="task.isDone && 'grey--text' || 'text--primary'"
                    class="tasktext"
                    v-text="task.name"
                  >
                  </div>
                  <!-- <div class="tasktext"
                    v-text="task.description">
                  </div>
                  <div class="tasktext"
                    v-text="task.date">
                  </div>
                  <div class="tasktext"
                    v-text="task.class">
                  </div>
                  <div class="tasktext"
                    v-text="task.difficulty">
                  </div> -->
                </template>
              </v-checkbox>
            </v-list-tile-action>

            <v-spacer></v-spacer>

            <v-scroll-x-transition>
              <v-icon
                v-if="task.isDone"
                color="success"
              >
                check
              </v-icon>
            </v-scroll-x-transition>
          </v-list-tile>

          <div class="space" :key="task.id">
          </div>

        </template>
      </v-slide-y-transition>
    </v-card>
    <v-btn outline color="green accent-4"
      @click="clearList">
      Delete All
    </v-btn>
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
