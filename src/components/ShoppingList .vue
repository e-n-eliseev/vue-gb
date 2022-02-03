<template>
  <div class="shopping-list">
    <ul class="shopping-list-header">
      <li class="shopping-list-item shopping-list-item__header">#</li>
      <li class="shopping-list-item shopping-list-item__header">Date</li>
      <li class="shopping-list-item shopping-list-item__header">Category</li>
      <li class="shopping-list-item shopping-list-item__header">Value</li>
    </ul>
    <ul v-for="item in shoppingList" :key="item.id" class="shopping-list-items">
      <li class="shopping-list-item">{{ item.id }}</li>
      <li class="shopping-list-item">{{ item.date }}</li>
      <li class="shopping-list-item">{{ item.category }}</li>
      <li class="shopping-list-item">
        {{ item.value }}
        <button
          class="context-menu-btn"
          :Data-Id="item.id"
          @click="showContextMenu"
        >
          <span class="context-menu-btn-icon"></span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ShoppingList",
  props: {
    shoppingList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    showContextMenu(event) {
      const contextMenuX = `${event.target.getBoundingClientRect().left - 110}`;
      const contextMenuY = `${
        event.target.closest(".context-menu-btn").getBoundingClientRect().top +
        30
      }`;
      const id = +event.target.closest(".context-menu-btn").dataset.id;

      this.$context.show({
        contextMenuX,
        contextMenuY,
        id,
      });
    },
  },
};
</script>

<style scoped>
.shopping-list {
  width: 700px;
  margin: 20px 0;
  padding: 10px;
  border: 1px solid black;
  box-shadow: 0 0 5px black;
  border-radius: 10px;
}
.shopping-list-header,
.shopping-list-items {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  position: relative;
}
.shopping-list-item {
  position: relative;
  flex: 1 0 25%;
  font-size: 12px;
  margin: 10px 0;
}
.shopping-list-items::before {
  content: "";
  width: 600px;
  height: 1px;
  position: absolute;
  border-top: 1px solid #bbb;
  top: 0px;
}
.shopping-list-item__header {
  font-size: 15px;
  font-weight: 600;
}
.context-menu-btn {
  background-color: transparent;
  border: none;
  width: 20px;
  height: 20px;
}
.context-menu-btn:hover {
  cursor: pointer;
}
.context-menu-btn-icon,
.context-menu-btn-icon::before,
.context-menu-btn-icon::after {
  display: block;
  width: 5px;
  height: 5px;
  background-color: black;
  border-radius: 50%;
}
.context-menu-btn-icon {
  position: relative;
}
.context-menu-btn-icon::before {
  content: "";
  position: absolute;
  top: 7px;
}
.context-menu-btn-icon::after {
  content: "";
  position: absolute;
  top: -7px;
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
