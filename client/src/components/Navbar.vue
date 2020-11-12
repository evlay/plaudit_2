<template>
  <div id="nav">
      <router-link class="nav-logo" to="/">Plaudit</router-link>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/posts">Posts</router-link>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Navbar extends Vue {

}
</script>

<style lang="scss" scoped>
#nav {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  padding: 1rem 0;
}

.nav-logo {
  font-weight: 700;
}
</style>