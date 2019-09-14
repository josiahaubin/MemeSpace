<template>
  <div class="AllPostView container-fluid text-light border rounded">
    <h4>Posts</h4>
    <div class="row justify-content-center">
      <PostComp v-for="post in posts" :postProp="post" :key="post._id" class="col-3 m-2" />
      <div class="col-12 pt-5">
        <CreatePostCompModal />
        <button
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#create-post-comp-modal"
        >List Post</button>
      </div>
    </div>
  </div>
</template>


<script>
import PostComp from "../components/PostComp";
import CreatePostCompModal from "../components/CreatePostCompModal";
export default {
  name: "AllPostView",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getPosts");
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  methods: {},
  components: { CreatePostCompModal, PostComp }
};
</script>


<style scoped>
</style>