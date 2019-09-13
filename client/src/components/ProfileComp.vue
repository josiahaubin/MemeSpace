//FIXME 
<template>
  <div class="Profile-Comp card col-4">
    <img alt="BIO IMAGE" />
    <h3>User Name</h3>
    <h3>Name</h3>
    <h5>BIO</h5>
    <EditProfileModal />
    <button class="btn btn-warning" data-toggle="modal" data-target="#edit-profile-modal">
      <i class="fas fa-pencil-alt"></i> Edit Profile
    </button>
  </div>
</template>


<script>
import EditProfileModal from "./EditProfileModal";
export default {
  name: "Profile-Comp",
  data() {
    return {};
  },
  computed: {},
  methods: {
    editProfile() {}
  },
  components: { EditProfileModal }
};
</script>


<style scoped>
</style>