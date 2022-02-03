<template>
  <div id="app">
    <div id="nav">
      <router-link to="/shoppingpage/1">ShoppingPage</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <transition name="fade">
      <modal-window :settings="settings" v-if="modalWindowName" />
      <context-menu :context="context" v-if="id" />
    </transition>
  </div>
</template>
<script>
export default {
  components: {
    ModalWindow: () =>
      import(/* webpackChunkName: 'Modal' */ "./components/ModalWindow.vue"),
    ContextMenu: () =>
      import(/* webpackChunkName: 'Modal' */ "./components/ContextMenu.vue"),
  },
  name: "App",
  data() {
    return {
      modalWindowName: "",
      settings: {},
      id: "",
      context: {},
    };
  },
  methods: {
    onShown(settings) {
      this.modalWindowName = settings.name;
      this.settings = settings;
    },
    onHide() {
      this.modalWindowName = "";
      this.settings = {};
    },
    onShownContext(context) {
      this.contextMenuX = context.contextMenuX;
      this.contextMenuY = context.contextMenuY;
      this.id = context.id;
      this.context = context;
    },
    onHideContext() {
      this.id = "";
      this.context = {};
    },
  },
  created() {
    this.$store.dispatch("fetchData");
    this.$store.dispatch("loadCategories");
  },
  mounted() {
    this.$modal.EventBus.$on("show", this.onShown);
    this.$modal.EventBus.$on("hide", this.onHide);
    this.$context.EventBus.$on("show", this.onShownContext);
    this.$context.EventBus.$on("hide", this.onHideContext);
  },
  beforeDestroy() {
    this.$modal.EventBus.$off("show", this.onShown);
    this.$modal.EventBus.$off("hide", this.onHide);
    this.$context.EventBus.$off("show", this.onShown);
    this.$context.EventBus.$off("hide", this.onHideContext);
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>


