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
          class="mr-2"
          outline color="green accent-4"
          @click="navigateTo('add-class')"
        >
          ADD CLASS
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
          <template v-for="(myClass, i) in Classes">
            <v-divider
              v-if="i !== 0"
              :key="`${i}-divider`"
            >
            </v-divider>
            <v-list-tile :key="`${i}-${myClass.name}`">
              <v-list-tile-action>
                <v-checkbox
                  v-model="myClass.classSelected"
                  color="info darken-3"
                >
                  <template v-slot:label>
                    <div v-text="myClass.name">
                    </div>
                  </template>
                </v-checkbox>
              </v-list-tile-action>
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
