<template>
  <div class="foundUserComp">
    <div class="card" v-if="user">
      <h3>{{user.username}}</h3>
      <img :src="user.img" alt="no image" />
      <div class="btn btn-success">Follow</div>
    </div>
  </div>
</template>


<script>
export default {
  name: "foundUserComp",
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.userSearchResults;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>