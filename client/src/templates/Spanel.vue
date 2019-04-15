<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <div class ="white elevation-2">
          <v-toolbar flat class="orange lighten-2" dark>
            <v-toolbar-title>{{title}}</v-toolbar-title>
            </v-toolbar>
            <div class="pl-5 pr-5 pt-4 pb-2">
            <slot />
            </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>
</style>
