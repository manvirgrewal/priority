<template>
  <div class="pl-5 pr-5 pt-2 pb-2">
    <v-layout column>
        <v-flex xs6>
          <div class ="white elevation-2">
            <v-toolbar flat dense class="indigo" dark>
              <v-toolbar-title>Register</v-toolbar-title>
            </v-toolbar>
            <div class="pl-5 pr-5 pt-5 pb-5">
              <v-text-field
                type="email"
                name="email"
                v-model="email"
                placeholder="email" />
              <br>
              <v-text-field
                type="password"
                name="password"
                v-model="password"
                placeholder="password" />
              <br>
              <div class="error" v-html="error" />
              <v-btn outline color="indigo"
                @click="register">
                Register
              </v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
