<template>
  <div class="noscroll">
    <panel title="Classes">
      <v-layout>
        <h2 class="display-1 success--text pl-3">
          Classes:&nbsp;
          <v-fade-transition leave-absolute>
            <span :key="`Classes-${Classes.length}`">
              {{ Classes.length }}
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
        @click="navigateTo('add-class')"
      >
        <v-icon dark>add</v-icon>
      </v-btn>
      </v-layout>
      <v-divider class="mt-3">
      </v-divider>
      <v-card v-if="Classes.length > 0">
        <v-slide-y-transition
          class="py-2"
          group
          tag="v-list"
        >
          <template v-for="myClass in Classes">
            <v-list-tile :key="myClass.id">
              <v-list-tile-action>
                <v-checkbox
                  v-model="myClass.classSelected"
                  color="secondary"
                >
                  <template v-slot:label>
                    <div v-text="myClass.name">
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
                      name: 'class',
                      params: {classId: myClass.id}
                    }
                  )"
                >
                  <v-scroll-x-transition>
                    <v-icon large color="primary">chevron_right</v-icon>
                  </v-scroll-x-transition>
              </v-btn>
              <v-spacer>
              </v-spacer>
            </v-list-tile>
          </template>
        </v-slide-y-transition>
      </v-card>
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
      Classes: [
      ],
      myClass: null,
      classSelected: null
    }
  },
  async mounted () {
    this.Classes = (await ClassesService.index()).data
  }
}
</script>

<style scoped>
</style>
