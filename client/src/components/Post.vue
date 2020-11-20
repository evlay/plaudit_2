<template>
  <div class="post-container">
    <p>{{ body }}</p>
    <p>Created: {{ createdOn }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Post extends Vue {
  @Prop() body!: string
  @Prop() createdOn!: string
}
</script>

<style lang="scss" scoped>
@import '../styles/utils';

.post-container {
  border: solid black 1px;
  border-radius: $rem-2;
  padding: $rem-4;
  margin: $rem-2 0 0 0;
}
</style>