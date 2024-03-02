<template>
  <div class="container">
    <componente1 />
    <componente2 />
  </div>
</template>

<script>
import componente1 from "../components/componente1.vue";
import componente2 from "../components/componente2.vue";

export default {
  components: { componente1, componente2 },
};
</script>

<style scoped>
.container{
    display: grid;
    align-content: center;
    justify-content: center;
}
</style>