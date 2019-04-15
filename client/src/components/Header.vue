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
    @click="navigateTo({name: 'root'})"
    >
    <v-icon medium>home</v-icon>
      Priority
    </span>
  </v-toolbar-title>
    <!-- TODO: implement create priority list page -->
    <!-- <v-toolbar-items>
      <v-btn flat dark>
        CREATE
      </v-btn>
    </v-toolbar-items> -->
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark
        @click="navigateTo({name: 'login'})"
      >
        LOGIN
      </v-btn>
      <v-btn flat dark
        @click="navigateTo({name: 'register'})"
      >
        SIGN UP
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
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
