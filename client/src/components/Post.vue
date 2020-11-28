<template>
  <div class="post-container">
    <p>{{ body }}</p>
    <p>Created: {{ createdOn.substring(0, 10) }}</p>
    <p>By: {{ user }}</p>
    <button @click="upvotePost" :class="{ likedPost: isLikedByCurrentUser }">
      
      <font-awesome-icon icon="thumbs-up" />&nbsp; {{ upvotes }}
    </button>
    <button v-if="postByCurrentUser" 
    @click="deletePost"
    class="remove-post-btn">Remove</button>
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
  @Prop() user!: string
  @Prop() isLikedByCurrentUser!: boolean
  @Prop() postByCurrentUser!: boolean

  private upvotePost() {
    this.$emit('upvote-post')
  }

  private deletePost() {
    this.$emit('delete-post')
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
  color: $slate;

  button {
    font-family: 'Roboto', sans-serif;
    border: solid 1px $slate;
    padding: $rem-1;
    border-radius: $rem-2;
    margin-top: $rem-1;
  }

  .remove-post-btn {
    color: red;
    border: solid 1px red;
    margin: 0 0 0 $rem-1;
  }

  button:hover {
    opacity: 0.75;
    transition: opacity 0.1s;
  }

  .thumbs-up-button {
    color: $slate;
  }

  .likedPost {
    color: $forest;
    border: solid 1px $forest;
  }
}
</style>
