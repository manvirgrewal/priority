<template>
<div class="noscroll">
    <panel title="Details">
      <v-list>
        <v-list-tile two-line subheader>
          <v-list-tile-content>
            <v-list-tile-title>{{myClass.name}}</v-list-tile-title>
            <v-list-tile-sub-title>{{myClass.description}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile two-line subheader>
          <v-list-tile-content>
            <v-list-tile-title>Professor</v-list-tile-title>
            <v-list-tile-sub-title>{{myClass.professor}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile two-line subheader>
          <v-list-tile-content>
            <v-list-tile-title>Difficulty</v-list-tile-title>
            <v-list-tile-sub-title>{{myClass.difficulty}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile two-line subheader>
          <v-list-tile-content>
            <v-list-tile-title>Importance</v-list-tile-title>
            <v-list-tile-sub-title>{{myClass.importance}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile two-line subheader>
          <v-list-tile-content>
            <v-list-tile-title>Target Grade</v-list-tile-title>
            <v-list-tile-sub-title>{{myClass.targetGrade}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-btn
        small
        fab
        light
        flat
        @click="navigateTo({name: 'classes'})"
      >
        <v-scroll-x-transition>
          <v-icon large color="primary">chevron_left</v-icon>
        </v-scroll-x-transition>
      </v-btn>
      <v-btn outline color="secondary"
        @click="navigateTo({name: 'edit-class'})">
        EDIT
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
  data () {
    return {
      myClass: {}
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
