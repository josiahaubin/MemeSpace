<template>
  <div class="PostView">
    <img :src="PostView.imgUrl" alt="img" />
    <h1>{{PostView.caption}}</h1>
    <h1>{{PostView.user}}</h1>
    <button class="btn btn-danger" @click="remove">Remove</button>
  </div>
</template>


<script>
export default {
  name: "PostView",
  data() {
    return {};
  },
  mounted() {
    let payload = {
      postId: this.$route.params.postId //FIXME
    };
  },
  computed: {
    post() {
      return this.$store.state.activePost;
    }
  },
  methods: {
    remove() {
      this.$store.dispatch("removePost", this.post._id); //FIXME POST._ID
    }
  },
  components: {}
};
</script>


<style scoped>
</style>