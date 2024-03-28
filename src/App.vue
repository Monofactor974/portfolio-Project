<template>
  <div class="matrix-background">
    <div class="background">
      <h1>PORTFOLIO</h1>
      <MainCard />
      <ProjectsCard />
    </div>
  </div>
</template>

<script setup>
import MainCard from "./components/MainCard.vue";
import ProjectsCard from "./components/ProjectsCard.vue";

const name = "App"; // Possibilité de déclarer des variables ici
</script>

<style scoped>
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
}

h1 {
  color: green;
  text-align: center;
  font-family: "Courier New", monospace;
  font-size: 60px;
  margin: 0;
  padding-top: 20px;
}
</style>
