<template>
  <div class="shopping-list">
    <ul class="shopping-list-header">
      <li class="shopping-list-item shopping-list-item__header">#</li>
      <li class="shopping-list-item shopping-list-item__header">Date</li>
      <li class="shopping-list-item shopping-list-item__header">Category</li>
      <li class="shopping-list-item shopping-list-item__header">Value</li>
    </ul>
    <ul
      v-for="(item, index) in shoppingList"
      :key="index"
      class="shopping-list-items"
    >
      <li class="shopping-list-item">{{ index + 1 }}</li>
      <li class="shopping-list-item">{{ item.date }}</li>
      <li class="shopping-list-item">{{ item.category }}</li>
      <li class="shopping-list-item">{{ item.value }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ShoppingList",
  components: {},
  props: {
    shoppingList: {
      type: Array,
      default: () => [],
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
</style>
