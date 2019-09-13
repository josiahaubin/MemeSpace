//FIXME 
<template>
  <div class="Profile">
    <h1>MemeSpace</h1>
    <ProfileComp />
    <Post />
  </div>
</template>

<script>
import PostComp from "../components/PostComp";
import ProfileComp from "../components/ProfileComp";

export default {
  name: "Profile",
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {},
  components: { PostComp, /*CreatePost,*/ ProfileComp /*, EditProfile*/ }
};
</script>

<style>
</style>
