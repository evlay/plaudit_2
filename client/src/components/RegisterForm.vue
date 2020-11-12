<template>
  <form id="register-form">
    <h1>Join the Plaudit community!</h1>
    <label for="Username">Username</label>
    <input id="register-form-username" v-model="registerUsername" type="text" />
    <label for="Password">Password</label>
    <input id="register-form-password" v-model="registerPassword" type="password" />
    <p>{{ registerStatusLabel }}</p>
    <button @click.prevent="submitRegisterForm">Submit</button>
  </form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import http from '../utils/http-common'

@Component
export default class RegisterForm extends Vue {

  private registerUsername = ''
  private registerPassword  = ''
  private registerStatus  = ''
  
  submitRegisterForm() {
    http.post('/auth/register', {
      username: this.registerUsername,
      password: this.registerPassword
    })
    .then(response => {
      const msg = response.data
      this.registerStatus = msg
    })
    .catch(err => {
      console.log(err)
    })
  }

  get registerStatusLabel() {
    return this.registerStatus
  }
  
  
}
</script>

<style lang="scss">
#register-form {
  display: flex;
  flex-direction: column;
  width: 25%;

  label,
  input {
    margin-bottom: 0.3rem;
  }

  p {
    text-align: center;
    color: red;
    font-weight: 700;
    margin-bottom: 0.3rem;
  }

  h1 {
    margin-bottom: 1rem;
    font-size: 1.6rem;
  }
}
</style>
