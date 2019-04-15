<template>
  <v-toolbar
    fixed
    class="green accent-4"
    dark
    clipped-left
    app
  >
  <v-toolbar-title class="mr-4">
    <span class="home"
    @click="navigateTo({name: 'home'})"
    >
    <v-icon medium>home</v-icon>
      Priority
    </span>
  </v-toolbar-title>
    <!-- TODO: implement create priority list page -->
    <v-toolbar-items>
      <v-btn
        v-if="$store.state.isUserLoggedIn"
        flat
        dark
      >
        CREATE
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        @click="navigateTo({name: 'login'})"
      >
        LOGIN
      </v-btn>
      <v-btn
        flat
        dark
        v-if="!$store.state.isUserLoggedIn"
        @click="navigateTo({name: 'register'})"
      >
        SIGN UP
      </v-btn>
      <v-btn
        flat
        dark
        v-if="$store.state.isUserLoggedIn"
        @click="navigateTo({name: 'dashboard'})"
      >
        MY DASHBOARD
      </v-btn>
      <v-btn
        flat
        dark
        v-if="$store.state.isUserLoggedIn"
        @click="logout"
      >
        LOGOUT
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import navigation from '@/mixins/navigation'
export default {
  mixins: [navigation],
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.navigateTo({name: 'home'})
    }
  }
}
</script>
<style scoped>
  .home{
    cursor: pointer;
  }
  .home:hover{
    color:khaki;
  }
</style>
