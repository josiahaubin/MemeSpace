//FIXME 
<template>
  <div class="Profile">
    <div class="bg-primary rounded row justify-content-center">
      <h1 class="text-light">MemeSpace</h1>
      <small class="text-light">Where memes become dreams</small>
    </div>
    <div class="row">
      <ProfileComp />
      <AllPostsView />
    </div>
    <div class="row">
      <button class="btn btn-secondary fixed-bottom" @click="logout()">Logout</button>
    </div>
  </div>
</template>

<script>
import AllPostsView from "../views/AllPostsView";
import ProfileComp from "../components/ProfileComp";

export default {
  name: "Profile",
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  },
  components: { AllPostsView, /*CreatePost,*/ ProfileComp /*, EditProfile*/ }
};
</script>

<style>
</style>
