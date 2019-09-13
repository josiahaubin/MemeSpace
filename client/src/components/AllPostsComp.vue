<template>
  <div class="AllPostsComp">
    <PostComp v-for="post in posts" :postProp="post" :key="post._id" />
  </div>
</template>


<script>
import PostComp from "./PostComp";
export default {
  name: "AllPostsComp",
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
  components: { PostComp }
};
</script>


<style scoped>
</style>