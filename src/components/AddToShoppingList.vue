<template>
  <div class="add-to-list">
    <input
      class="add-to-list-field"
      type="number"
      placeholder="Value"
      v-model="value"
    />
    <input
      class="add-to-list-field"
      placeholder="Category"
      v-model="category"
    />
    <input class="add-to-list-field" placeholder="Date" v-model="date" />
    <div class="add-to-category">
      <input
        class="add-to-category-field"
        placeholder="Введите новую категорию"
        v-model="newCategory"
      />
      <button
        class="add-to-list-btn"
        @click="addToCategory"
        :title="addCategoryTolltip"
      >
        ADD +
      </button>
      <button class="add-to-list-btn" @click="addToList" :title="addTolltip">
        ADD +
      </button>
    </div>
    <button class="add-to-list-btn" @click="resetForm" :title="clearTolltip">
      CLEAR
    </button>
  </div>
</template>

<script>
export default {
  name: "AddToShoppingList",
  props: {
    items: {
      type: Number,
      default: () => 1,
    },
    categoryList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      addTolltip: "Добавить заметку в список",
      addCategoryTolltip: "Добавить новую категорию в список",
      clearTolltip: "Очистить поля ввода данных",
      value: "",
      category: "",
      date: "",
      newCategory: "",
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  methods: {
    resetForm() {
      this.value = "";
      this.category = "";
      this.date = "";
    },
    addToList() {
      const data = {
        id: this.items + 1,
        value: this.value,
        category: this.category,
        date: this.date || this.getCurrentDate,
      };
      this.$emit("addToList", data);
    },
    addToCategory() {
      if (!this.categoryList.includes(this.newCategory)) {
        this.$emit("addToCategory", this.newCategory);
      }
    },
  },
};
</script>

<style scoped>
.add-to-list {
  width: 700px;
  margin: 20px 0;
  padding: 10px 37px 10px;
  border: 1px solid black;
  box-shadow: 0 0 5px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-sizing: border-box;
}
.add-to-list-btn {
  color: aliceblue;
  background: green;
  border-radius: 10px;
  width: 100px;
  height: 30px;
  box-shadow: 0 5px 5px black;
  border: none;
  align-self: flex-end;
  transition: 0.1s ease-in-out;
  margin: 10px 0;
}
.add-to-list-btn:active {
  transform: translateY(5px);
  box-shadow: 0 0px 0px black;
}
.add-to-list-field,
.add-to-category-field {
  width: 600px;
  height: 30px;
  margin: 10px 0;
  box-shadow: 0px 0px 3px black;
  border: none;
  border-radius: 5px;
  padding-left: 20px;
}
.add-to-category-field {
  width: 200px;
}
.add-to-category {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>
