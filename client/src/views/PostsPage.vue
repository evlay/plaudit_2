<template>
  <div class="posts-container">
    <h1>Posts</h1>
    <button @click="fetchPosts">Fetch</button>
    <ul v-for="post in posts" :key="post.__id">
      <Post :summary="post.summary" :body="post.body" :createdOn="post.createdOn"/>
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
  data() {
    return {
      posts: []
    }
  },
  methods: {
    fetchPosts() {
      http.get('/posts')
        .then(res => {
          this.posts = res.data
          console.log(this.posts)
        })
        .catch(err => console.log(err))
    }
  },
  mounted(){
    this.fetchPosts()
  }
}
</script>

<style lang="scss"></style>
