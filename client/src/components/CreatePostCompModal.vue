<template>
  <div class="CreatePostCompModal text-dark">
    <div id="create-post-comp-modal" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Create Post</h5>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addPost()">
              <!-- image  -->
              <div class="form-group">
                <label for="imgUrl">Image Url</label>
                <input
                  type="text"
                  class="form-control"
                  id="imgUrl"
                  placeholder="Enter imgUrl"
                  v-model="newPost.imgUrl"
                />
              </div>
              <!-- caption  -->
              <div class="form-group">
                <label for="caption">Caption</label>
                <input
                  type="text"
                  class="form-control"
                  id="caption"
                  placeholder="Enter caption"
                  v-model="newPost.caption"
                  required
                />
              </div>
              <!-- user  -->
              <!-- <div class="form-group">
                <label for="user">User</label>
                <input
                  type="text"
                  class="form-control"
                  id="user"
                  placeholder="Enter user"
                  v-model="newPost.user"
                  required
                />
              </div>-->
              <button type="submit" class="btn btn-primary">Save changes</button>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "create-post-comp-modal",
  data() {
    return {
      newPost: {
        user: this.$store.state.user.name
      }
    };
  },
  computed: {},
  methods: {
    addPost() {
      debugger;
      this.$store.dispatch("addPost", this.newPost);
      this.newPost = {};
      $(".close").click();
    }
  },
  components: {}
};
</script>


<style scoped>
</style>