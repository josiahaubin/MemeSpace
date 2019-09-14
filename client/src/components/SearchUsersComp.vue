<template>
  <div class="searchUsersComp">
    <form @submit.prevent="search()">
      <input type="text" class="form-control" v-model="searchFor" />
      <button class="btn btn-primary" type="submit">Search</button>
    </form>
  </div>
</template>


<script>
export default {
  name: "searchUsersComp",
  data() {
    return {
      searchFor: ""
    };
  },
  computed: {},
  methods: {
    search() {
      this.$store.dispatch("findUsersByName", this.searchFor);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>