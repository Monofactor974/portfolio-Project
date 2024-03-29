<template>
  <div class="retour"><router-link to="/">Home</router-link></div>
  <div class="centercontainer">
    <div
      class="project-card"
      v-for="item in projectData.projectsArray"
      :key="item.id"
    >
      <h2>{{ item.Title }}</h2>
      <img :src="item.Image" alt="" />
      <p>{{ item.About }}</p>
      <div class="links">
        <!-- Utilisation de :href pour lier dynamiquement l'attribut href -->
        <a :href="item.Link1" target="_blank">
          <img src="../assets/github.svg" alt="First Link" />
        </a>
        <!-- Deuxième image -->
        <a :href="item.Link2" target="_blank">
          <img src="../assets/link-solid.svg" alt="Second Link" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import jsonData from "/projects.json";

export default {
  data() {
    return {
      projectData: jsonData,
    };
  },
};
</script>

<style>
body {
  background-color: black; /* Fond noir pour toute la page */
}
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100vh;
}

.project-card {
  color: blanchedalmond;
  text-align: center;
  background-color: black;
  margin: 10px; /* Marge entre les projets */
  flex: 0 0 calc(40% - 20px); /* Calcul de la largeur pour conserver la marge */
}

.project-card img {
  height: 10rem;
  box-shadow: blanchedalmond 0px 3px 8px;
  border-radius: 25px;
}

.links {
  margin-top: 10px; /* Marge supérieure pour les liens */
}

.links a {
  margin-right: 10px; /* Marge entre les liens */
}

.links img {
  box-shadow: none; /* Retirer la boîte d'ombre pour les images dans les liens */
  height: 3rem;
}
@media only screen and (max-width: 950px) {
  .main-container {
    width: 95%;
  }
}
.retour {
  text-align: left;
  font-family: "Courier New", monospace;
  font-size: 4vw; /* Utilisation de vw pour une taille de police responsive */
  margin: 0;
  padding-top: 20px;
  padding-left: 20%;
  height: auto;
}
</style>
