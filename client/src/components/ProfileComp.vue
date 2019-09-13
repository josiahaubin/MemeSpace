//FIXME 
<template>
  <div class="Profile-Comp card col-4">
    <img :src="profile.img" alt="BIO IMAGE" />
    <h3>{{profile.username}}</h3>
    <h5>{{profile.bio}}</h5>
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
  computed: {
    profile() {
      return this.$store.state.user;
    }
  },
  methods: {
    // editProfile() {}
  },
  components: { EditProfileModal }
};
</script>


<style scoped>
</style>