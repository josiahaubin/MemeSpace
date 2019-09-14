//FIXME 
<template>
  <div class="Profile">
    <h1 class="text-light">MemeSpace</h1>
    <div class="row">
      <ProfileComp />
    </div>
    <AllPostsView />
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
  methods: {},
  components: { AllPostsView, /*CreatePost,*/ ProfileComp /*, EditProfile*/ }
};
</script>

<style>
</style>
