import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css"; // Importez vos styles CSS ici

import { createRouter, createWebHistory } from "vue-router";
import PageErreur from "./components/PageNotFound.vue";
import home from "./components/Home.vue";

const routes = [
  {
    path: "/",
    component: home,
  },
  {
    path: "/:pathMatch(.*)*",
    component: PageErreur,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
const app = createApp(App);
app.use(router);
app.mount("#app");
