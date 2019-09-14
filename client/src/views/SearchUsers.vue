<template>
  <div class="searchUsers">
    <SearchUsersComp />
    <FoundUserComp />
  </div>
</template>


<script>
import SearchUsersComp from "../components/SearchUsersComp";
import FoundUserComp from "../components/FoundUserComp";
export default {
  name: "searchUsers",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: { SearchUsersComp, FoundUserComp }
};
</script>


<style scoped>
</style>