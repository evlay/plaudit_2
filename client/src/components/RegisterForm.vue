<template>
  <div class="register-form-container">
    <form id="register-form">
      <h2>Register</h2>
      <label for="Username">Username</label>
      <input
        id="register-form-username"
        v-model="registerUsername"
        type="text"
      />
      <label for="Password">Password</label>
      <input
        id="register-form-password"
        v-model="registerPassword"
        type="password"
      />
      <button @click.prevent="submitRegisterForm">Submit</button>
      <div class="register-status-container">
        <p class="register-success">{{ registerSuccess }}</p>
        <p class="register-error">{{ registerError }}</p>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import http from '../utils/http-common'

@Component
export default class RegisterForm extends Vue {
  private registerUsername = ''
  private registerPassword = ''
  private registerStatus = ''
  private registerSuccess = ''
  private registerError = ''

  submitRegisterForm() {
    this.registerSuccess = ''
    this.registerError = ''

    if (this.registerUsername == '' || this.registerPassword == '') {
      this.registerError = 'Username and password are required'
    } else {
      http
        .post('/auth/register', {
          username: this.registerUsername,
          password: this.registerPassword,
        })
        .then((response) => {
          const msg = response.data
          this.registerError = msg
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss">
@import '../styles/colors';
@import '../styles/utils';

.register-form-container {
  width: 60%;
  margin: 6.5rem auto;
  box-shadow: $box-shadow-1;
  border-radius: 0.25rem;
  padding: 1.75rem;

  #register-form {
    display: flex;
    flex-direction: column;
    width: 100%;

    label,
    input {
      margin-bottom: $rem-2;
    }

    label {
      font-weight: 900;
    }

    input {
      padding: $rem-3;
      border: 1px solid $slate;
      border-radius: $rem-1;
      font-size: 1.2rem;
    }

    p {
      text-align: center;
      font-weight: 700;
      margin-bottom: 0.3rem;
    }

    h2 {
      font-weight: 500;
      margin-bottom: 1rem;
      text-align: center;
      font-size: 1.6rem;
    }

    button {
      background-color: $forest;
      color: $white;
      border-radius: $rem-1;
      border: none;
      font-weight: 700;
      font-size: 100%;
      padding: $rem-4;
      border: solid $white 1px;
    }

    button:hover {
      cursor: pointer;
    }

    .register-status-container {
      margin-top: $rem-4;
      text-align: center;
    }

    .register-error {
      color: red;
    }
    .register-success {
      color: $forest;
    }
  }
}
</style>
