<template>
  <div class="searchUsersComp">
    <form>
      <input type="text" class="form-control" v-model="searchFor" />
      <button class="btn btn-primary">Search</button>
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
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>