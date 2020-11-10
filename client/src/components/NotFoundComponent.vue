<template>
  <div class="not-found-component">
    <h1>404</h1>
    <br>
    <p>Sorry, could not find the page you were looking for</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class NotFoundComponent extends Vue {
   @Prop() private msg!: string;
}
</script>

<style lang="scss">
.not-found-component {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  flex-direction: column;
}
</style>