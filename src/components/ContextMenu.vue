<template>
  <div class="wrapperContext">
    <button class="context-menu-btn">✏ Редактировать</button>
    <button class="context-menu-btn" @click="deleteItemFromTheList">
      🧺 Удалить
    </button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    context: {
      type: Object,
      default: () => {},
    },
  },
  name: "ContextMenu",
  methods: {
    deleteItemFromTheList() {
      this.$store.commit("deleteDataToShoppingList", this.context.id - 1);
    },
  },
  mounted() {
    console.log(document.querySelector(".wrapperContext"));
    const menu = document.querySelector(".wrapperContext");
    menu.style.top = parseInt(this.context.contextMenuY) + "px";
    console.log("top>", menu.style.top);
    menu.style.left = parseInt(this.context.contextMenuX) + "px";
    console.log("left>", menu.style.left);
  },
};
</script>


<style lang="scss" scoped>
.wrapperContext {
  position: absolute;
  width: 165px;
  height: 100px;
  box-shadow: 0 0 5px black;
  top: 10px;
  left: 10px;
  background-color: white;
  padding: 10px 0;
}
.context-menu-btn {
  background: transparent;
  border: none;
  margin: 10px 0;
  width: 100%;
  height: 30px;
}
.context-menu-btn:hover {
  background-color: rgb(226, 224, 224);
}
</style>