<template v-on:postCreated="emitTest">
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
      <button  @click="showNewPostForm = true" class="new-post-button">
        New Post
      </button>
    </div>
    <div v-if="showNewPostForm" class="create-post-container">
      <CreatePostForm v-on:closeCreateForm="showNewPostForm=false"></CreatePostForm>
    </div>
    <div class="posts-container">
      <ul v-for="post in posts" :key="post._id">
        <Post
          v-on:upvote-post="upvotePost($event, post._id)"
          :id="post.id"
          :summary="post.summary"
          :body="post.body"
          :createdOn="post.createdOn"
          :upvotes="post.upvotes"
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
      currentUser: localStorage.getItem('currentPlauditUser')
    }
  },
  computed: {},
  methods: {
    fetchPosts() {
      http
        .get('/posts')
        .then((res) => {
          this.posts = res.data
        })
        .catch((err) => console.log(err))
    },
    upvotePost(event, id) {
    http.patch(`/posts/upvote/${id}`, {username: this.$store.state.currentUser})
    .then(response => {
      console.log(response)
      this.fetchPosts()
    })
    .catch(error => {
      console.log(error)
    })
  },
  upvoteTest(event, id){
    console.log(id)
  }
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

  .posts-container {
    margin-bottom: $rem-4;
  }

  .create-post-container {
    margin: $rem-2 0;
  }

  .liked-post {
    color: $forest;
  }
}
</style>
