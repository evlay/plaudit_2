<template>
  <div class="login-form-container">
    <form id="login-form">
      <h2>Login</h2>
      <label for="Username">Username</label>
      <input v-focus id="login-form-username" v-model="loginUsername" type="text" />
      <label for="Password">Password</label>
      <input id="login-form-password" v-model="loginPassword" type="password" />

      <button @click.prevent="submitLoginForm">Submit</button>
      <div class="login-status-container">
        <p class="login-error">{{ loginError }}</p>
        <p class="login-success">{{ loginSuccess }}</p>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import http from "../utils/http-common";

@Component
export default class LoginForm extends Vue {
  private loginUsername = "";
  private loginPassword = "";
  private loginError = "";
  private loginSuccess = "";

  submitLoginForm() {
    this.loginSuccess = "";
    this.loginError = "";

    if (this.loginUsername === "" || this.loginPassword === "") {
      this.loginError = "Username and password are required";
    } else {
      http
        .post("/auth/login", {
          username: this.loginUsername,
          password: this.loginPassword,
        })
        .then((response) => {
          if (response.data == true) {
            this.loginSuccess = "Success!";
            this.$store.commit("setUser", this.loginUsername);
            this.$router.push("/posts");
          } else {
            this.loginError = "Incorrect email or password.";
          }
        })
        .catch((err) => {
          console.log(err.status);
        });
    }
  }

  get getLoginSuccess() {
    return this.loginSuccess;
  }
}
</script>

<style lang="scss">
@import "../styles/colors";
@import "../styles/utils";

.login-form-container {
  width: 60%;
  margin: 6.5rem auto;
  box-shadow: $box-shadow-1;
  border-radius: 0.25rem;
  padding: 1.75rem;

  #login-form {
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

    .login-status-container {
      margin-top: $rem-4;
      text-align: center;
    }

    .login-error {
      color: red;
    }
    .login-success {
      color: $forest;
    }
  }
}
</style>
