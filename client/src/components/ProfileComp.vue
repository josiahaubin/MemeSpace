//FIXME 
<template>
  <div class="Profile-Comp card col-4">
    <img :src="profile.img" alt="BIO IMAGE" />
    <h3>{{profile.username}}</h3>
    <h5>{{profile.bio}}</h5>
    <EditProfileModal />
    <CreateProfileModal />
    <button class="btn btn-info" data-toggle="modal" data-target="#create-profile-modal">
      <i class="fas fa-pencil-alt"></i> Create Profile
    </button>
    <button class="btn btn-warning" data-toggle="modal" data-target="#edit-profile-modal">
      <i class="fas fa-pencil-alt"></i> Edit Profile
    </button>
  </div>
</template>


<script>
import EditProfileModal from "./EditProfileModal";
import CreateProfileModal from "./CreateProfileModal";
export default {
  name: "Profile-Comp",
  data() {
    return {};
  },
  computed: {
    profile() {
      return this.$store.state.user;
    }
  },
  methods: {
    // editProfile() {}
  },
  components: { EditProfileModal, CreateProfileModal }
};
</script>


<style scoped>
</style>