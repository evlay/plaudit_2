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
      <button @click="showNewPostModal = true" class="new-post-button">
        New Post
      </button>
    </div>
    <div v-if="showNewPostModal" class="create-post-mask">
      <div class="create-post-modal">
        <div class="create-post-modal-header">
          <label for="createPost">Create Post&nbsp;</label>
          <button @click="showNewPostModal = false">
            <font-awesome-icon icon="window-close" size="2x" />
          </button>
        </div>
        <input type="text" />
      </div>
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
import Post from "@/components/Post";
import http from "@/utils/http-common";

export default {
  components: {
    Post,
  },
  data() {
    return {
      posts: [],
      showNewPostModal: false,
    };
  },
  methods: {
    fetchPosts() {
      http
        .get("/posts")
        .then((res) => {
          this.posts = res.data;
          console.log(this.posts);
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style lang="scss">
@import "../styles/colors";
@import "../styles/utils";

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
    display: inline-flex;
    align-items: center;
    justify-items: center;
    justify-content: space-around;
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
  }

  .create-post-modal {
    background: gray;
    margin: auto;
    padding: $rem-4;
    border-radius: $rem-4;

    input {
      width: 100%;
      height: 10rem;
    }

    .create-post-modal-header {
      width: 100%;
      // background: coral;
      text-align:center;
      margin-bottom: $rem-2;
      
    }
  }
}
</style>
