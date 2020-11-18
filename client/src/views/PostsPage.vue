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

export default {
  components: {
    Post,
  },
  data() {
    return {
      posts: [],
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

.posts-page {
  button {
    background: transparent;
    border: none;
    outline: none;
    // background: coral;
  }

  button:hover {
    cursor: pointer;
  }

  .posts-title-container {
    // display: inline-flex;
    // align-items: center;
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
}
</style>
