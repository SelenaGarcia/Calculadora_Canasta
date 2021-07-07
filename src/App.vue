<template>
  <div id="app">
    <CalculadoraCanasta />
  </div>
</template>

<script>
import CalculadoraCanasta from "./components/CalculadoraCanasta.vue";

export default {
  name: "App",
  components: {
    CalculadoraCanasta,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
