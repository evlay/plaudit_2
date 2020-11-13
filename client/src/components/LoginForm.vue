<template>
  <form id="login-form">
    <h1>Login</h1>
    <label for="Username">Username</label>
    <input id="login-form-username" v-model="loginUsername" type="text" />
    <label for="Password">Password</label>
    <input id="login-form-password" v-model="loginPassword" type="password" />
    <p>{{ loginStatusLabel }}</p>
    <button @click.prevent="submitLoginForm">Submit</button>
  </form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import http from '../utils/http-common'

@Component
export default class LoginForm extends Vue {
  private loginUsername = ''
  private loginPassword = ''
  private loginStatus = ''

  submitLoginForm() {
    if (this.loginUsername === '' || this.loginPassword === '') {
      this.loginStatus = 'username and password are required'
    } else {
      http
        .post('/auth/login', {
          username: this.loginUsername,
          password: this.loginPassword,
        })
        .then((response) => {
          if(response.data == true) {
            console.log('username set in localStorage')
            window.localStorage.setItem('supaSecretPlauditUser', this.loginUsername)
            this.loginStatus = 'Success!'
          } else {
            this.loginStatus = 'Incorrect email or password.'
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  get loginStatusLabel() {
    return this.loginStatus
  }
}
</script>

<style lang="scss">
@import '../styles/colors';

#login-form {
  display: flex;
  flex-direction: column;
  width: 50%;

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

  button {
    background-color: $white;
    color: $slate;
    border-radius: 1rem;
    border: none;
    font-weight: 700;
    padding: 0.3rem 0.5rem;
    border: solid black 1px;
  }

  button:hover {
    cursor: pointer;
  }
}
</style>
