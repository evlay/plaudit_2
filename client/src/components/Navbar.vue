<template>
  <div id="nav">
    <div class="navbar-container">
      <div class="logo_container">
        <router-link class="nav-logo" to="/">Plaudit</router-link>
      </div>
      <router-link to="/">Home</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/posts">Posts</router-link>
      <!-- <p v-if="currentUser">{{ currentUser }}</p> -->
      <button v-if="currentUser" @click="logout">{{ currentUser }} logout ></button>
      <button v-if="!currentUser"><router-link  to="/login">login ></router-link></button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Navbar extends Vue {
  get currentUser() {
    return this.$store.state.currentUser
  }

  private logout() {
    this.$store.commit('logout')
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/colors';
@import '../styles/utils';

#nav {
  width: 100%;
  
  // background-color: coral;
  a {
    font-weight: 700;
  }

  p {
    color: $forest;
    font-weight: 700;
  }

  button {
    padding: $rem-1 $rem-4;
    background: $slate;
    color: $white;
    border-radius: $rem-2;
    font-weight: 600;
    font-size: 90%;
    border: none;
  }

  button:hover{
    cursor: pointer
  }
}

.navbar-container {
  display: flex;
  justify-content: space-evenly;
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
