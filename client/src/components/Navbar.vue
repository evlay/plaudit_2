<template>
  <div id="nav">
    <div class="navbar-container">
      <div class="logo_container">
        <router-link class="nav-logo" to="/">Plaudit</router-link>
      </div>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/posts">Posts</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Navbar extends Vue {}
</script>

<style lang="scss" scoped>
@import '../styles/colors';

#nav {
  width: 100%;
  // background-color: coral;
  a {
    font-weight: 700;
  }
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
    margin: 16px 32px;
}

.nav-logo {
  font-weight: 700;
}

.router-link-exact-active {
  text-decoration: underline;
}

.nav-logo {
  text-decoration: none;
  color: $forest;
  font-size: 125%;
}
</style>
