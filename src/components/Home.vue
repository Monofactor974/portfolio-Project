<template>
  <div class="background">
    <div class="main-container">
      <h1>PORTFOLIO</h1>
      <MainCard />
      <ProjectsCard />
    </div>
  </div>
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
  background-color: black;
}

.main-container {
  padding: 20px;
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
    transform: translateX(calc(10% - 50px));
  }
  100% {
    transform: translateX(calc(70% - 50px));
  }
}

@media only screen and (max-width: 950px) {
  .main-container {
    width: 95%;
  }
}
</style>
