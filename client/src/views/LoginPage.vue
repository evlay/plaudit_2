<template>
  <div id="login-page">
    <LoginForm></LoginForm>
  </div>
</template>

<script lang="ts">
import LoginForm from '../components/LoginForm.vue'

export default {
  components: {
    LoginForm
  }
}
</script>

<style lang="scss">

#login-page {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>





