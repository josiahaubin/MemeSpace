<template>
  <div class="login p-3">
    <div class="row d-flex justify-content-center">
      <form v-if="loginForm" @submit.prevent="loginUser">
        <input type="email" class="form-control m-3" v-model="creds.email" placeholder="email" />
        <input
          type="password"
          class="form-control m-3"
          v-model="creds.password"
          placeholder="password"
        />
        <button class="btn btn-success mb-3" type="submit">Login</button>
      </form>
      <form v-else @submit.prevent="register">
        <input type="text" class="form-control m-3" v-model="newUser.name" placeholder="name" />
        <input type="email" class="form-control m-3" v-model="newUser.email" placeholder="email" />
        <input
          type="password"
          class="form-control m-3"
          v-model="newUser.password"
          placeholder="password"
        />
        <button class="btn btn-warning mb-3" type="submit">Create Account</button>
      </form>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="action" @click="loginForm = !loginForm">
        <p v-if="loginForm">No account? Click here to Register</p>
        <p v-else>Already have an account? Click here to Login</p>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router.js";
export default {
  name: "login",
  data() {
    return {
      loginForm: true,
      creds: {
        email: "",
        password: ""
      },
      newUser: {
        email: "",
        password: "",
        name: ""
      }
    };
  },
  beforeCreate() {
    if (this.$store.state.user._id) {
      this.$router.push({ name: "Profile" });
    }
  },
  methods: {
    register() {
      this.$store.dispatch("register", this.newUser);
    },
    loginUser() {
      this.$store.dispatch("login", this.creds);
    }
  }
};
</script>

<style>
.action {
  cursor: pointer;
}
</style>