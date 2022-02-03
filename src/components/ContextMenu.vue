<template>
  <div class="wrapperContext">
    <button class="context-menu-btn" @click="onShowModal">
      ✏ Редактировать
    </button>
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
    onShowModal() {
      this.$modal.show("ChangingListItem", {
        header: "Change shopping list item",
        content: "AddToShoppingList",
        addButtonVision: true,
        date: this.changeItem.date,
        value: this.changeItem.value,
        category: this.changeItem.category,
        id: this.context.id - 1,
      });
      this.onHideContext();
      console.log(this.changeItem);
    },
    deleteItemFromTheList() {
      this.$store.commit("deleteDataToShoppingList", this.context.id - 1);
      this.onHideContext();
    },
    onHideContext() {
      this.$context.hide();
    },
  },
  computed: {
    changeItem() {
      return this.$store.getters.getShoppingList[this.context.id - 1];
    },
  },
  mounted() {
    const contextMenu = document.querySelector(".wrapperContext");
    contextMenu.style.top = parseInt(this.context.contextMenuY) + "px";
    contextMenu.style.left = parseInt(this.context.contextMenuX) + "px";
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