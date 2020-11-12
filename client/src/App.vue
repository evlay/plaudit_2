<template>
  <div id="app">
    <div id="app-container">
      <Navbar></Navbar>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue'

export default {
  components: { Navbar },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Roboto&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  // font-size: 100%;
}

a {
  text-decoration: none;
  color: inherit;
}

#app {
  font-family: 'Roboto', sans-serif;
  min-width: 100%;
  min-height: 100vh;
  // background: steelblue;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Noto Sans JP', sans-serif;
}

#app-container {
  width: 100%;
  // background: coral;
  margin: auto;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style>
