<template>
  <div id="app" class="wrapper">
    <h1>My personal shipping list.</h1>
    <button
      class="showAddToshoppingListFormBtn"
      @click="showAddToshoppingListForm"
      :title="addFormTolltip"
    >
      Add new cost +
    </button>
    <AddToShoppingList
      v-if="isVisibleForm"
      :items="length"
      :categoryList="categoryList"
      @addToList="addItemToList"
      @addToCategory="addItemToCategoryList"
    />
    <ShoppingList
      v-if="shoppingList.length"
      :shoppingList="shoppingList.slice(this.firstItem, this.lastItem)"
    />
    <div v-if="shoppingList.length">Итого затрат:{{ getFSV }}</div>
    <Pagination
      v-if="length > pageSize"
      :pages="length"
      @choosePage="showPage"
      @changePage="showPage"
      @changeSize="changeSize"
    />
  </div>
</template>

<script>
import AddToShoppingList from "./components/AddToShoppingList.vue";
import ShoppingList from "./components/ShoppingList .vue";
import Pagination from "./components/Pagination.vue";

export default {
  name: "App",
  components: {
    ShoppingList,
    AddToShoppingList,
    Pagination,
  },
  data() {
    return {
      addFormTolltip: "Открыть/закрыть окно добавления элемента списка",
      isVisibleForm: false,
      firstItem: 0,
      lastItem: 5,
      pageSize: 5,
    };
  },
  computed: {
    getFSV() {
      return this.$store.getters.getFullShoppingValue;
    },
    shoppingList() {
      return this.$store.getters.getShoppingList;
    },
    categoryList() {
      return this.$store.getters.getCategoryList;
    },
    length() {
      return this.shoppingList.length;
    },
  },
  methods: {
    changeSize(number) {
      this.pageSize = number;
      this.lastItem = number;
      this.firstItem = 0;
    },
    showPage(page) {
      this.firstItem = (page - 1) * this.pageSize;
      this.lastItem = page * this.pageSize;
    },
    showAddToshoppingListForm() {
      this.isVisibleForm = !this.isVisibleForm;
    },
    addItemToList(data) {
      this.$store.commit("addDataToShoppingList", data);
    },
    addItemToCategoryList(data) {
      this.$store.commit("addDataToCategoryList", data);
    },
  },
  created() {
    this.$store.dispatch("fetchData");
    this.$store.dispatch("loadCategories");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.wrapper {
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
h1 {
  font-size: 25px;
  margin: 20px 0;
}
.showAddToshoppingListFormBtn {
  color: aliceblue;
  background: green;
  border-radius: 10px;
  width: 200px;
  height: 50px;
  box-shadow: 0 5px 5px black;
  border: none;
  transition: 0.1s ease-in-out;
}
.showAddToshoppingListFormBtn:active {
  transform: translateY(5px);
  box-shadow: 0 0px 0px black;
}
</style>
