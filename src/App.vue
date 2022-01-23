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
      :items="shoppingList.length"
      @addToList="addItemToList"
    />
    <ShoppingList
      v-if="shoppingList.length"
      :shoppingList="shoppingList.slice(this.firstItem, this.lastItem)"
    />
    <Pagination
      v-if="shoppingList.length > 5"
      :pages="shoppingList.length"
      @changePage="showPage"
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
      shoppingList: [],
      firstItem: 0,
      lastItem: 5,
    };
  },
  methods: {
    showPage(page) {
      this.firstItem = (page - 1) * 5;
      this.lastItem = page * 5;
    },
    showAddToshoppingListForm() {
      this.isVisibleForm = !this.isVisibleForm;
    },
    addItemToList(data) {
      this.shoppingList = [...this.shoppingList, data];
    },
    fetchData() {
      return [
        {
          id: 1,
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          id: 2,
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          id: 3,
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
        {
          id: 4,
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          id: 5,
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          id: 6,
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
        {
          id: 7,
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          id: 8,
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          id: 9,
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
        {
          id: 10,
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          id: 11,
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          id: 12,
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
        {
          id: 13,
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          id: 14,
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          id: 15,
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
        {
          id: 16,
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          id: 17,
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          id: 18,
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
        {
          id: 19,
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          id: 20,
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          id: 21,
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
      ];
    },
  },
  created() {
    this.shoppingList = this.fetchData();
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
