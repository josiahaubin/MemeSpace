<template>
  <div class="PostComp">
    <img src alt="MEME IMAGE" />
    <div>CAPTION</div>
    <div>USER</div>
  </div>
</template>

<script>
export default {
  name: "post",
  props: ["postProp"], // FIXME WHAT IS A A PROP
  data() {
    return {};
  },
  computed: {},
  methods: {
    // TODO viewPost(){
    //   this.$router.push({
    //     name:"post",
    //     params: {postId: this.postProp._id}
    //   });
    // }
  }
};
</script>

<style>
</style>
