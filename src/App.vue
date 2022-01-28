<template>
  <div id="app">
    <div id="nav">
      <a href="shoppingpage">ShoppingPage</a> /
      <a href="about">About</a>
    </div>
    <ShoppingPage v-if="page === 'shoppingpage'" />
    <About v-else-if="page === 'about'" />
    <Welcome v-else-if="page === ''" />
    <PageNotFound v-else />
  </div>
</template>

<script>
import ShoppingPage from "./components/ShoppingPage.vue";
import About from "./components/About.vue";
import Welcome from "./components/Welcome.vue";
import PageNotFound from "./components/PageNotFound.vue";

export default {
  name: "App",
  components: {
    About,
    ShoppingPage,
    Welcome,
    PageNotFound,
  },
  data() {
    return {
      page: "",
    };
  },
  methods: {
    setPage() {
      this.page = location.pathname.slice(1);
    },
  },
  mounted() {
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        history.pushState({}, "", link.href);
        this.setPage();
      });
    });
    this.setPage();
    window.addEventListener("popstate", this.setPage);
  },
  beforeDestroy() {
    window.removeEventListener("popstate", this.setPage);
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>


