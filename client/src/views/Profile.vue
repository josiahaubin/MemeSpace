//FIXME 
<template>
  <div class="Profile">
    <h1 class="text-light">MemeSpace</h1>
    <small class="text-light">Where memes become dreams</small>
    <div class="row">
      <ProfileComp />
    </div>
    <AllPostsView />
    <div class="row">
      <button class="btn btn-danger fixed-bottom" @click="logout()">Logout</button>
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
