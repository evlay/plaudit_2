<template>
  <div class="create-post-form">
    <div class="create-post-header">
      <h2>Create a Post</h2>
      <button @click="closeCreateForm">
        <font-awesome-icon icon="window-close" class="close-button" size="2x" />
      </button>
    </div>
    <textarea v-model="postBody" name="" id="" cols="30" rows="10"></textarea>
    <button @click="createPostReq" class="submit-button">Submit</button>
    <div class="status-container">
      <p class="status-error">{{ createPostError }}</p>
      <p class="status-success">{{ createPostSuccess }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import http from "../utils/http-common";

@Component
export default class CreatePostForm extends Vue {
  private postBody = "";
  private postUser = "";
  private postCreatedOn = "";
  private createPostError = "";
  private createPostSuccess = "";

  closeCreateForm() {
    this.$emit("closeCreateForm");
  }

  createdPost() {
    this.$emit("post-created");
  }

  createPostReq() {
    this.createPostError = ""
    this.createPostSuccess = ""

    if (this.postBody == "") {
      this.createPostError = "You need to put something in the post!";
    } else {
      http
        .post("/posts", {
          body: this.postBody,
          username: "test",
        })
        .then((res) => {
          this.postBody = "";
          this.createPostSuccess = "Post successfully submitted";
          this.createdPost()
        })
        .catch((err) => {
          this.createPostError = err;
        });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/utils";
@import "../styles/colors";

.create-post-form {
  width: 90%;
  margin: 0 auto;
  box-shadow: $box-shadow-1;
  border-radius: 0.25rem;
  padding: 1.75rem;
  text-align: center;
  background: $white;

  .submit-button {
    background-color: $forest;
    width: 100%;
    color: $white;
    border-radius: $rem-1;
    border: none;
    font-weight: 700;
    font-size: 100%;
    padding: $rem-4;
    border: solid $white 1px;
  }

  .create-post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: $rem-2;
  }

  .close-button {
    color: $slate;
  }

  textarea {
    width: 100%;
    height: 10rem;
    font-family: "Roboto", sans-serif;
    padding: $rem-2;
    font-size: 1rem;
  }

  .status-container {
    margin-top: $rem-4;
  }

  .status-success {
    color: $forest;
  }

  .status-error {
    color: red;
  }
}
</style>
