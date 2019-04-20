<template>
    <v-layout justify-center>
      <v-flex xs12 sm8>
        <div flat class ="white">
          <v-toolbar flat class="orange lighten-2" dark>
            <v-toolbar-title>{{title}}</v-toolbar-title>
            </v-toolbar>
            <div class="pl-5 pr-5 pt-4 pb-2">
            <slot />
            </div>
        </div>
      </v-flex>
    </v-layout>
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
