<template>
<div class="noOverlap">
  <v-toolbar
    fixed
    dense
    flat
    class="green accent-4"
    dark
    app
  >
  <v-toolbar-title>
    <span class="home"
    @click="navigateTo({name: 'home'})"
    >
    <v-icon medium>home</v-icon>
      Priority
    </span>
  </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        v-for="item in visibleLinks"
        :key="item.title"
        @click="navTo(item)"
        flat
        dark
      >
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
    <v-menu class="hidden-md-and-up">
      <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-card>
          <v-btn
            v-for="item in visibleLinks"
            :key="item.title"
            @click="navTo(item)"
            flat
          >
            {{ item.title }}
          </v-btn>
        </v-card>
    </v-menu>
  </v-toolbar>
</div>
</template>

<script>
import navigation from '@/mixins/navigation'
export default {
  data () {
    return {
      menu: [
        { title: 'TASKS', link: 'tasks' },
        { title: 'CREATE TASK', link: 'create-task' },
        { title: 'LOGIN', link: 'login' },
        { title: 'REGISTER', link: 'register' },
        { title: 'LOGOUT', link: 'home' }
      ]
    }
  },
  mixins: [navigation],
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.navigateTo({name: 'home'})
    },
    menuItems () {
      return this.menu
    },
    navTo (item) {
      if (item.title === 'LOGOUT') {
        this.logout()
      } else {
        this.navigateTo({name: item.link})
      }
    }
  },
  computed: {
    visibleLinks (link) {
      return this.menu.filter((link) => {
        var display = false
        if (this.$store.state.isUserLoggedIn && (link.title === 'LOGIN' || link.title === 'REGISTER')) {
          display = false
        } else if (this.$store.state.isUserLoggedIn && link.title === 'LOGOUT') {
          display = true
        } else if (!this.$store.state.isUserLoggedIn && link.title === 'LOGOUT') {
          display = false
        } else {
          display = true
        }
        return display
      })
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
  .noOverlap{
    clear:both;
  }
</style>
