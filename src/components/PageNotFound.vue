<template>
  <div class="container">
    <h1 class="title">Page Not Found</h1>
    <p class="message">Sorry, the page you are looking for does not exist.</p>
    <!-- Add a link back to the homepage if needed -->
    <!-- <router-link to="/">Go to Home Page</router-link> -->
    <img
      src="../assets/Erreur404.png"
      alt="Page Not Found Image"
      class="image"
    />
    <router-link to="/" class="link">Aller à la page d'accueil</router-link>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style scoped>
.container {
  text-align: center;
}

.title {
  font-size: 50px; /* Modifier la taille du titre selon vos préférences */
  color: aliceblue;
  margin-bottom: 50px;
}

.message {
  margin-bottom: 50px;
  font-size: 40px; /* Modifier la taille du message selon vos préférences */
}

.link {
  font-size: 40px; /* Modifier la taille du lien selon vos préférences */
  color: aliceblue;
}
.image {
  width: 300px; /* Définir la largeur de l'image selon vos préférences */
  height: auto; /* Maintenir le ratio de l'image */
  border-radius: 50%;
}
</style>
