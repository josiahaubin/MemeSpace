<template>
  <div id="create-profile-modal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Create Your Profile!</h5>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createProfile()">
            <div class="form-group">
              <input type="text" name="username" placeholder="username" v-model="userInfo.username" />
              <label for="profileImage">Profile Image</label>
              <!-- <input type="file" class="form-control-file" id="profileImage" v-model="userInfo.img" /> -->
              <input
                type="text"
                name="imgUrl"
                class="form-control"
                id="imgUrl"
                v-model="userInfo.img"
              />
              <label for="profileBio">Bio</label>
              <textarea id="profileBio" class="form-control" rows="3" v-model="userInfo.bio"></textarea>
            </div>
            <button class="btn btn-success">Submit</button>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "create-profile-modal",
  data() {
    return {
      userInfo: {}
    };
  },
  computed: {
    createdUser() {
      return this.$store.state.user;
    }
  },
  methods: {
    createProfile() {
      let payload = {
        userInfo: this.userInfo,
        userId: this.createdUser._id
      };
      this.$store.dispatch("createProfile", payload);
      this.userInfo = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>