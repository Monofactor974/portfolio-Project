<template>
  <div class="background">
    <div>
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
  text-align: left;
  font-family: "Courier New", monospace;
  font-size: 60px;
  margin: 0;
  padding-top: 20px;
  animation-duration: 5s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes slidein {
  0% {
    transform: translateX(
      calc(10% - 50px)
    ); /* Déplace l'élément à 10% de la largeur de la fenêtre moins 50px */
  }
  100% {
    transform: translateX(
      calc(70% - 50px)
    ); /* Déplace l'élément à 90% de la largeur de la fenêtre moins 50px */
  }
}
@media only screen and (max-width: 950px) {
  .main-container {
    width: 95%;
  }
}
</style>
