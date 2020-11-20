<template>
  <div class="create-post-container">
    <h1>CREATE</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CreatePostForm extends Vue {
  data() {
    return {
      postBody: "",
      postUser: "",
      postCreatedOn: "",
    };
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color: red;
}
</style>
