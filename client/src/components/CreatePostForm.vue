<template>
  <div class="create-post-form">
    <div class="create-post-header">
      <h2>Create a Post</h2>
      <button @click="closeCreateForm">
        <font-awesome-icon icon="window-close" class="close-button" size="2x"/>
      </button>
    </div>
    <textarea name="" id="" cols="30" rows="10"></textarea>
    <button class="submit-button">Submit</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CreatePostForm extends Vue {
  data() {
    return {
      postBody: '',
      postUser: '',
      postCreatedOn: '',
    }
  }

  closeCreateForm(){
    this.$emit('closeCreateForm')
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/utils';
@import '../styles/colors';

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
    font-family: 'Roboto', sans-serif;
    padding: $rem-2;
    font-size: 1rem;
  }
}
</style>
