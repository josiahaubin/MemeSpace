<template>
  <div class="PostView">
    <img src="" alt="img" />
    <h1>caption</h1>
    <h1>user.name</h1>
    <button class="btn btn-danger" @click="remove">Remove</button>
  </div>
</template>


<script>
export default {
  name: 'PostView',
  data(){
    return {}
  },
  mounted() {
    let payload = {
      postId: this.$route.params.postId //FIXME 
    };
  },
  computed:{
    post() {
      return this.$store.state.activePost; //FIXME ACTIVE POST
    }
  },
  methods:{
    remove() {
      this.$store.dispatch("removePost", this.post._id) //FIXME POST._ID
    }
  },
  components:{}
}
</script>


<style scoped>

</style>