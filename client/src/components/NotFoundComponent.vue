<template>
  <div class="NotFoundComponentContainer">
    <h1>404</h1>
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