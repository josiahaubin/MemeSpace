<template>
  <div class="postComp col-3 border rounded" @click="viewPost()">
    <!-- <img :src="postProp.imgUrl" alt="posted img" /> -->
    <h5>{{postProp.caption}}</h5>
    <h5>{{postProp.user}}</h5>
  </div>
</template>


<script>
export default {
  name: "post",
  props: ["postProp"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    viewPost() {
      this.$router.push({
        name: "post",
        params: { postId: this.postProp._id }
      }); //FIXME PARAMS POSTID
    }
  },
  components: {}
};
</script>


<style scoped>
</style>