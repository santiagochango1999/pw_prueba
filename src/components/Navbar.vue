<template>
  <div class="container">
    <router-link to="/estudiante">estudiante</router-link>
    <router-link to="/token">token</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  width: 30%;
  height: 70px;
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 20px;
  border-radius: 10px;
  background-color: #007c76;
  box-shadow: 15px 10px 5px 5px #00000033;
}

a {
  height: 20px;
  font-family: "Times New Roman", Times, serif;
  font-size: 30px;
  padding: 10px 20px; /* Adjusted padding for the button */
  border: solid 1px white;
  margin: 10px;
  background: white;
  border-radius: 6px;
  color: rgb(56, 119, 160);
  text-decoration: none;
  transition: transform 0.3s ease;
}

a:hover {
  transform: scale(1.05);
}
</style>