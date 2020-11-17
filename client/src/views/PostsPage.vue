<template>
  <div class="posts-container">
    <h1>Posts</h1>
    <ul>
      <Post summary="summary 1" body="body 1" createdOn="1969"/>
      <button @click="fetchPosts">Fetch</button>
    </ul>
  </div>
</template>

<script>
import Post from '@/components/Post'
import http from '@/utils/http-common'

export default {
  components: {
    Post
  },

  methods: {
    fetchPosts: () => {
      http.get('/posts')
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
  }
}
</script>

<style lang="scss"></style>
