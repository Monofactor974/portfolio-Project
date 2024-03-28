<template>
  {{ projectData.projectsArray }}
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

<style></style>
