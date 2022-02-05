<template>
  <div class="wrapperContext" :style="style">
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
  computed: {
    style() {
      return {
        top: this.context.contextMenuY,
        left: this.context.contextMenuX,
      };
    },
  },
  methods: {
    onShowModal() {
      this.$modal.show("ChangingListItem", {
        header: "Change shopping list item",
        content: "AddToShoppingList",
        addButtonVision: true,
        date: this.context.date,
        value: this.context.value,
        category: this.context.category,
        itemId: this.context.id,
        itemPos: this.context.itemPos - 1,
      });
      this.onHideContext();
    },
    deleteItemFromTheList() {
      this.$store.commit("deleteDataToShoppingList", this.context.itemPos - 1);
      this.onHideContext();
    },
    onHideContext() {
      this.$context.hide();
    },
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
  transition: 0.2s;
  border-radius: 5px;
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