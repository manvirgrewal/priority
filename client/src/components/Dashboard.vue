<template>
  <div class="dashboard">
    <v-container>
      <div class="dashboard-title">
        <h1>Welcome to</h1>
        <h1 class="h1x">Your Dashboard</h1>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'dashboard'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard-title {
  padding: 0px;
}
.h1x {
  font-style: italic;
  font-weight: bolder;
}
h1,h2 {
  font-weight: normal;
}
h2 {
  text-decoration: underline;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px 10px;
}
</style>
