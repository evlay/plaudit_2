<template>
  <div>
    <PageNotFoundComponent msg="Sorry, we couldn't find the page you are looking for"></PageNotFoundComponent>
  </div>
</template>

<script lang="ts">
import PageNotFoundComponent from '@/components/NotFoundComponent.vue'

export default {
  components: {
    PageNotFoundComponent,
  }
}
</script>