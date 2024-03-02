<template>
  <div class="contain">
    <navbar />
  </div>
  <router-view />
</template>

<script>
import navbar from "../src/components/Navbar.vue";
export default {
  name: "App",
  components: {
    navbar,
  },
};
</script>

<style>
.contain {
  display: flex;
  align-content: center;
  justify-content: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
