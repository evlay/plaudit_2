<template>
  <div class="post-container">
    <h2>{{ summary }}</h2>
    <p>{{ body }}</p>
    <p>Created: {{ createdOn }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Post extends Vue {
  @Prop() summary!: string
  @Prop() body!: string
  @Prop() createdOn!: string
}
</script>

<style lang="scss" scoped>

</style>