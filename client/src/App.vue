<template>
  <div id="app" class="container-fluid">
    <!-- NAV BAR HERE -->
    <div id="nav">
      <router-link to="/">Profile</router-link>|
      <router-link to="/SearchUsers">Search Users</router-link>
      <!-- SEARCH BAR HERE -->
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #42b983;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>