//FIXME 
<template>
  <div class="Profile">
    <h1>MemeSpace</h1>
    <ProfileComp />
    <AllPostsComp />
  </div>
</template>

<script>
import AllPostsComp from "../components/AllPostsComp";
import ProfileComp from "../components/ProfileComp";

export default {
  name: "Profile",
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {},
  components: { AllPostsComp, /*CreatePost,*/ ProfileComp /*, EditProfile*/ }
};
</script>

<style>
</style>
