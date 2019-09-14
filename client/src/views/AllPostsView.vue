<template>
  <div class="AllPostView container-fluid">
    <div class="row">
      <PostComp v-for="post in posts" :postProp="post" :key="post._id" />
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
import AllPostsComp from "../components/AllPostsComp";
import CreatePostCompModal from "../components/CreatePostCompModal"; // FIXME
export default {
  name: "AllPostView",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getAllPosts"); // FIXME
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  methods: {},
  components: { CreatePostCompModal, AllPostsComp }
};
</script>


<style scoped>
</style>