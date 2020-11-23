<template>
  <div class="post-container">
    <p>{{ body }}</p>
    <button @click="upvotePost" class="thumbs-up-button"><font-awesome-icon icon="thumbs-up" /> {{ upvotes.length }}</button>
    <p>Created: {{ createdOn.substring(0, 9) }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Post extends Vue {
  @Prop() body!: string
  @Prop() createdOn!: string
  @Prop() upvotes!: string[]
  @Prop() id!: string

  private upvotePost(){
    this.$emit('upvote-post')
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/utils';
@import '../styles/colors';

.post-container {
  flex-direction: column;
  min-width: 100%;
  border: solid black 1px;
  border-radius: $rem-2;
  padding: $rem-4;
  margin: $rem-2 0 0 0;

  button {
    font-family: 'Roboto', sans-serif;
    border: solid 1px $slate;
    padding: $rem-1;
    border-radius: $rem-2;
  }

  .thumbs-up-button {
    color: $slate;
  }
}
</style>
