<template>
  <form id="login-form">
    <h1>Login</h1>
    <label for="Username">Username</label>
    <input id="login-form-username" v-model="loginUsername" type="text" />
    <label for="Password">Password</label>
    <input id="login-form-password" v-model="loginPassword" type="password" />
    <p>{{ loginStatus }}</p>
    <button @click.prevent="submitLoginForm">Submit</button>
  </form>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import http from '../utils/http-common'

@Component
export default class LoginForm extends Vue {
  name!: 'LoginForm';

  @Prop({type: String})
  loginUsername = ''
  @Prop({type: String})
  loginPassword =''
  @Prop({type: String})
  loginStatus = ''
  
  submitLoginForm() {
    http.get('/auth/users')
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
  }
  
}
</script>

<style lang="scss">
#login-form {
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
  }
}
</style>
