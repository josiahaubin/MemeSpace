//FIXME 
<template>
  <div class="Profile-Comp card col-4">
    <img :src="profile.img" alt="BIO IMAGE" class="card-img-top" />
    <div class="card-body">
      <h3 class="card-title">{{profile.username}}</h3>
      <h5 class="card-text">{{profile.bio}}</h5>
      <EditProfileModal />
      <CreateProfileModal />
      <button
        class="btn btn-info"
        data-toggle="modal"
        data-target="#create-profile-modal"
        v-if="!profile.username"
      >
        <i class="fas fa-pencil-alt"></i> Create Profile
      </button>
      <!-- <button class="btn btn-warning" data-toggle="modal" data-target="#edit-profile-modal" v-if="profile.username">
      <i class="fas fa-pencil-alt"></i> Edit Profile
      </button>-->
    </div>
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
  // mounted() {
  //   this.getProfile();
  // },
  computed: {
    profile() {
      return this.$store.state.user;
    }
  },
  methods: {
    getProfile() {
      this.$store.dispatch("getProfile");
    }
  },
  components: { EditProfileModal, CreateProfileModal }
};
</script>


<style scoped>
img {
  max-height: 200px;
  max-width: 200px;
}
</style>