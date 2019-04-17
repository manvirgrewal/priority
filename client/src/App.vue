<template>
  <div id="app">
    <v-app class="noscroll">
      <PageHeader />
        <v-content>
          <router-view />
        </v-content>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:white;
}
.noscroll {
  width: 100%;
  position: fixed;
  overflow-x: hidden;
  overflow-y: hidden;
}
</style>
