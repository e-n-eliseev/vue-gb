<template>
  <v-app>
    <v-app-bar app flat>
      <v-btn to="/shoppingpage/1" plain :ripple="false"> ShoppingPage </v-btn>
      <v-btn to="/about" plain :ripple="false"> About </v-btn>
      <v-btn to="/calculator" plain :ripple="false"> Calculator </v-btn>
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
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

#nav {
  padding: 30px;
}
a {
  font-weight: bold;
  color: #2c3e50;
}
a.router-link-exact-active {
  color: #42b983;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
} */
</style>


