<template>
  <div class="home">
    <div class="home-title">
      <h1>Welcome to</h1>
      <h1 class="h1x">Priority</h1>
    </div>
    <br>
    <h2>Your path to getting shit done asap.</h2>
    <ul>
      <li>
        Create automatically prioritized schedules.
      </li>
      <li>
        Prioritization is based on your deadlines and needs.
      </li>
      <li>
        Schedules dynamically update in real time according to your life.
      </li>
    </ul>
    <br>
    <h2>Ever evolving.</h2>
    <ul>
      <li>
      Our algorithm is constantly updated to become more accurate.
      </li>
      <li>
        We care about your objectives and needs.
      </li>
      <li>
        Set and forget. We will do the rest.
      </li>
    </ul>
  </div>
</template>

<script>
import panel from '@/templates/Panel'
export default {
  name: 'Home',
  components: {
    panel
  }
}
</script>

<style scoped>
.home {
  padding-top: 20px;
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
