<template>
  <div class="posts-page">
    <div class="posts-title-container">
      <h1>Posts</h1>
      <button>
        <font-awesome-icon
          @click="fetchPosts"
          icon="sync"
          size="2x"
          class="fa-spin-hover"
        />
      </button>
      <button @click="showNewPostForm = true" class="new-post-button">
        New Post
      </button>
    </div>
    <div v-if="showNewPostForm" class="create-post-container">
      <CreatePostForm v-on:closeCreateForm="showNewPostForm=false"></CreatePostForm>
    </div>
    <div class="posts-container">
      <ul v-for="post in posts" :key="post.__id">
        <Post
          :summary="post.summary"
          :body="post.body"
          :createdOn="post.createdOn"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import Post from '@/components/Post'
import http from '@/utils/http-common'
import CreatePostForm from '@/components/CreatePostForm.vue'

export default {
  components: {
    Post,
    CreatePostForm,
  },
  data() {
    return {
      posts: [],
      showNewPostForm: false,
    }
  },
  methods: {
    fetchPosts() {
      http
        .get('/posts')
        .then((res) => {
          this.posts = res.data
          console.log(this.posts)
        })
        .catch((err) => console.log(err))
    },
  },
  mounted() {
    this.fetchPosts()
  },
}
</script>

<style lang="scss">
@import '../styles/colors';
@import '../styles/utils';

.posts-page {
  button {
    background: transparent;
    border: none;
    outline: none;
  }

  button:hover {
    cursor: pointer;
  }

  .posts-title-container {
    display: inline-flex;
    align-items: center;
    justify-items: center;
    justify-content: space-between;
    min-height: 56px;
    width: 100%;
  }

  .fa-spin-hover {
    color: $slate;
  }

  .fa-spin-hover:hover {
    animation: fa-spin 2s infinite linear;
  }
  // The animation bellow is taken from font-awesome.css
  @-webkit-keyframes fa-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
  @keyframes fa-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }

  .new-post-button {
    font-weight: 700;
    border: solid black 1px;
    border-radius: $rem-2;
    padding: $rem-3;
    color: $slate;
  }

  .create-post-container {
    margin: $rem-2 0;
  }
}
</style>
