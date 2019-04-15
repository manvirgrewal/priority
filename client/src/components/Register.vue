<template>
  <div>
    <v-container fluid fill-height>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <div class ="white elevation-2">
            <v-toolbar flat class="orange lighten-2" dark>
              <v-toolbar-title>Register</v-toolbar-title>
            </v-toolbar>
            <div class="pl-5 pr-5 pt-4 pb-2">
              <v-text-field
                type="email"
                v-model="email"
                :rules="[rules.required, rules.email]"
                label="E-mail"
                color="green accent-4"
                loading
              >
                <template v-slot:progress>
                  <v-progress-linear
                    :value="emailProg"
                    :color="emailColor"
                    height="7"
                  ></v-progress-linear>
                </template>
              </v-text-field>
              <br>
              <v-text-field
                v-model="password"
                :append-icon="show1 ? 'visibility' : 'visibility_off'"
                :rules="[rules.required, rules.min, rules.max]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                counter
                @click:append="show1 = !show1"
                label="Password"
                color="green accent-4"
                loading
              >
                <template v-slot:progress>
                  <v-progress-linear
                    :value="passProg"
                    :color="passColor"
                    height="7"
                  ></v-progress-linear>
                </template>
              </v-text-field>
              <br>
              <div class="error" v-html="error" />
                <div class="btn">
                  <v-btn outline color="green accent-4"
                    @click="register">
                    Register
                  </v-btn>
              </div>
          </div>
        </div>
      </v-flex>
    </v-layout>
    </v-container>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data: () => ({
    email: '',
    show1: false,
    password: '',
    error: null,
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      max: w => w.length <= 32 || 'Max 32 characters',
      email: value => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return pattern.test(value) || 'Invalid e-mail.'
      }
    }
  }),
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
    },
    emailIsValid (value) {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (pattern.test(value) === true) { return 1 } else return 0
    }
  },
  computed: {
    emailProg () {
      if (this.emailIsValid(this.email) === 1) {
        return Infinity
      } else {
        return this.email.length * 5
      }
    },
    passProg () {
      return Math.min(100, this.password.length * 13)
    },
    passColor () {
      return ['error', 'warning', 'success'][Math.floor(this.passProg / 40)]
    },
    emailColor () {
      if (this.emailProg === Infinity) {
        return 'success'
      } else {
        return ['error', 'warning'][Math.floor(this.emailProg / 50)]
      }
    }
  }
}
</script>

<style scoped>
.error {
  background-color: red;
  color: white;
}
</style>
