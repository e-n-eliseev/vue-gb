<template>
  <div class="wrapper">
    <h1>My personal shipping list.</h1>
    <button
      class="showAddToshoppingListFormBtn"
      :title="addFormTolltip"
      @click="onShowModal"
    >
      Add new cost +
    </button>
    <div class="quick-add">
      <button
        class="showAddToshoppingListFormBtn"
        :title="quickAddFormTolltip"
        @click="addFood"
      >
        You can quick add: category:food,price:200
      </button>
      <button
        class="showAddToshoppingListFormBtn"
        :title="quickAddFormTolltip"
        @click="addTransport"
      >
        You can quick add: category:transport, price:50
      </button>
      <button
        class="showAddToshoppingListFormBtn"
        :title="quickAddFormTolltip"
        @click="addEntertainment"
      >
        You can quick add: entertainment, price:2000
      </button>
    </div>
    <ShoppingList
      v-if="length"
      :shoppingList="shoppingList.slice(this.firstItem, this.lastItem)"
    />
    <div v-if="length">Итого затрат:{{ getFSV }}</div>
    <Pagination
      v-if="length > pageSize"
      :length="length"
      :activePage="activePage"
      :pageSize="pageSize"
      @choosePage="showPage"
      @changePage="showPage"
      @changeSize="changeSize"
    />
  </div>
</template>

<script>
export default {
  name: "ShoppingPage",
  components: {
    ShoppingList: () => import("./ShoppingList .vue"),
    Pagination: () => import("./Pagination.vue"),
  },
  data() {
    return {
      addFormTolltip: "Открыть/закрыть окно добавления элемента списка",
      quickAddFormTolltip: "кнопка быстрого добавления товара",
      firstItem: 0,
      lastItem: 5,
      pageSize: 5,
      activePage: 1,
    };
  },
  computed: {
    getFSV() {
      return this.$store.getters.getFullShoppingValue;
    },
    shoppingList() {
      return this.$store.getters.getShoppingList;
    },
    length() {
      return this.shoppingList.length;
    },
  },
  methods: {
    onShowModal() {
      this.$modal.show("AddToShoppingList", {
        header: "Add to shopping list form",
        content: "AddToShoppingList",
      });
    },
    changeSize(number) {
      this.pageSize = number;
      this.lastItem = number;
      this.firstItem = 0;
    },
    showPage(page) {
      this.activePage = page;
      this.firstItem = (this.activePage - 1) * this.pageSize;
      this.lastItem = this.activePage * this.pageSize;
    },
    showAddToshoppingListForm() {
      this.isVisibleForm = !this.isVisibleForm;
    },
    addFood() {
      this.$router.push({
        name: "AddToShoppingList",
        query: {
          value: +200,
        },
        params: {
          category: "Food",
        },
      });
    },
    addTransport() {
      this.$router.push({
        name: "AddToShoppingList",
        params: {
          category: "Transport",
        },
        query: {
          value: +50,
        },
      });
    },
    addEntertainment() {
      this.$router.push({
        name: "AddToShoppingList",
        params: {
          category: "Entertainment",
        },
        query: {
          value: +2000,
        },
      });
    },
  },
  //получаем данные при создании компонента
  created() {
    const { activePage } = this.$route.params;
    if (activePage) {
      this.activePage = +activePage;
    }
  },
};
</script>

<style>
.wrapper {
  max-width: 1200px;
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
  min-width: 130px;
  min-height: 30px;
  box-shadow: 0 5px 5px black;
  border: none;
  transition: 0.1s ease-in-out;
  margin: 10px 0;
}
.showAddToshoppingListFormBtn:active {
  transform: translateY(5px);
  box-shadow: 0 0px 0px black;
}
.quick-add {
  display: flex;
  flex-direction: column;
}
</style>