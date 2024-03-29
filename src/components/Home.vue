<template>
  <header></header>
  <body>
    <div class="background">
      <div class="main-container">
        <h1 class="move-text">PORTFOLIO</h1>
        <MainCard />
        <!-- <ProjectsCard /> -->
      </div>
    </div>
  </body>
  <footer></footer>
</template>

<script>
// Importer les composants MainCard et ProjectsCard
import MainCard from "./MainCard.vue";
import ProjectsCard from "./ProjectsCard.vue";

export default {
  name: "App",
  components: {
    MainCard,
    ProjectsCard,
  },
};
</script>

<style scoped>
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: black; */
}

.main-container {
  padding: 20px;
}

h1 {
  color: green;
  text-align: center;
  font-family: "Courier New", monospace;
  font-size: 6vw; /* Utilisation de vw pour une taille de police responsive */
  margin: 0;
  padding-top: 20px;
  height: auto;
}

@media only screen and (max-width: 950px) {
  .main-container {
    width: 95%;
  }
}
</style>
