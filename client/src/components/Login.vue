<template>
  <div class="noscroll">
    <Spanel title="Login">
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
            @click="login">
            LOGIN
          </v-btn>
      </div>
    </Spanel>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Spanel from '@/templates/Spanel'
import navigation from '@/mixins/navigation'
import emailPass from '@/mixins/email-pass'
export default {
  mixins: [navigation, emailPass],
  components: {
    Spanel
  },
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
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.navigateTo({name: 'tasks'})
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    emailIsValid (value) {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (pattern.test(value) === true) { return 1 } else return 0
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
