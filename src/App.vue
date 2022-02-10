<template>
  <v-app>
    <v-app-bar app flat>
      <v-btn to="/shoppingpage/1" plain :ripple="false"> ShoppingPage </v-btn>
      <v-btn to="/about" plain :ripple="false"> About </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "App",
  created() {
    this.$store.dispatch("fetchData");
    this.$store.dispatch("loadCategories");
  },
};
</script>

<style scoped>
</style>


