<template>
  <div class="noscroll">
    <panel title="Edit Class">
      <v-text-field
        label="Class Name"
        :rules="[rules.required]"
        v-model="myClass.name"
        color="green accent-4"
      >
      </v-text-field>
      <v-text-field
        label="Professor"
        :rules="[rules.required]"
        v-model="myClass.professor"
        color="green accent-4"
      >
      </v-text-field>
      <v-text-field
        label="Description"
        v-model="myClass.description"
        color="green accent-4"
      >
      </v-text-field>
      <v-radio-group
        label="Difficulty Level: "
        :rules="[rules.required]"
        v-model="myClass.difficulty"
        row
      >
        <v-radio label="Very Easy" value="0.2"></v-radio>
        <v-radio label="Not bad" value="0.4"></v-radio>
        <v-radio label="Probably Hard" value="0.6"></v-radio>
        <v-radio label="Difficult" value="0.8"></v-radio>
        <v-radio label="Extreme" value="1"></v-radio>
      </v-radio-group>
      <v-radio-group
        label="Importance: "
        :rules="[rules.required]"
        v-model="myClass.importance"
        row
      >
        <v-radio label="Don't Care" value="0.2"></v-radio>
        <v-radio label="Kinda Care" value="0.4"></v-radio>
        <v-radio label="I care" value="0.6"></v-radio>
        <v-radio label="I really care" value="0.8"></v-radio>
        <v-radio label="Gotta kill it" value="1"></v-radio>
      </v-radio-group>
       <v-text-field
        label="Target Grade"
        :rules="[rules.required]"
        v-model="myClass.targetGrade"
        color="green accent-4"
      >
      </v-text-field>
      <v-btn
      small
      fab
      light
      flat
      @click="navigateTo(
        {
          name: 'class',
          params: {classId: myClass.id}
        }
      )"
    >
      <v-scroll-x-transition>
        <v-icon large color="primary">chevron_left</v-icon>
      </v-scroll-x-transition>
    </v-btn>
      <v-btn outline color="green accent-4"
        @click="update">
        Update
      </v-btn>
    </panel>
  </div>
</template>

<script>
import panel from '@/templates/Panel'
import ClassesService from '@/services/ClassesService'
import navigation from '@/mixins/navigation'
export default {
  mixins: [navigation],
  components: {
    panel
  },
  data: () => ({
    levels: [1, 2, 3, 4, 5],
    myClass: {
      name: '',
      professor: '',
      description: '',
      difficulty: 0,
      importance: 0,
      targetGrade: '',
      classSelected: false
    },
    rules: {
      required: value => !!value || 'Required.'
    }
  }),
  methods: {
    async update () {
      const classId = this.$store.state.route.params.classId
      try {
        await ClassesService.put(this.myClass)
        this.navigateTo({
          name: 'class',
          params: {
            classId: classId
          }
        })
      } catch (err) {
        console.log("Couldn't update your class.")
      }
    }
  },
  async mounted () {
    const classId = this.$store.state.route.params.classId
    this.myClass = (await ClassesService.show(classId)).data
  }
}
</script>
<style scoped>
</style>
