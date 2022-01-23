<template>
  <div id="app" class="wrapper">
    <h1>My personal shipping list.</h1>
    <button
      class="showAddToshoppingListFormBtn"
      @click="showAddToshoppingListForm"
    >
      Add new cost +
    </button>
    <AddToShoppingList
      v-if="isVisibleForm"
      :shoppingList="shoppingList"
      @addToList="addItemToList"
    />
    <ShoppingList v-if="shoppingList.length" :shoppingList="shoppingList" />
  </div>
</template>

<script>
import AddToShoppingList from "./components/AddToShoppingList.vue";
import ShoppingList from "./components/ShoppingList .vue";

export default {
  name: "App",
  components: {
    ShoppingList,
    AddToShoppingList,
  },
  data() {
    return {
      isVisibleForm: false,
      shoppingList: [],
    };
  },
  methods: {
    showAddToshoppingListForm() {
      this.isVisibleForm = !this.isVisibleForm;
    },
    addItemToList(data) {
      this.shoppingList = [...this.shoppingList, data];
    },
    fetchData() {
      return [
        {
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
        {
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
        {
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
        {
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
        {
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
        {
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
        {
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
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
