<template>
  <div id="register-page">
    <RegisterForm></RegisterForm>
  </div>
</template>

<script lang="ts">
import RegisterForm from '../components/RegisterForm.vue'

export default {
  components: {
    RegisterForm
  }
}
</script>

<style lang="scss">

#register-page {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>


