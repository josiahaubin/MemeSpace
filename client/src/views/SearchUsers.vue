<template>
  <div class="searchUsers">
    <div class="row">
      <SearchUsersComp class="col" />
    </div>
    <div class="row">
      <FoundUserComp />
    </div>
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