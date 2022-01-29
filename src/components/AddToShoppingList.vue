<template>
  <div class="add-to-list">
    <input
      class="add-to-list-field"
      type="number"
      placeholder="Value"
      v-model="value"
    />
    <!-- <input
      class="add-to-list-field"
      placeholder="Category"
      v-model="category"
    /> -->
    <select v-model="category" class="add-to-category-list-field">
      <option class="options" v-for="(item, idx) in categoryList" :key="idx">
        {{ item }}
      </option>
    </select>
    <input class="add-to-list-field" placeholder="Date" v-model="date" />
    <div class="add-to-category">
      <input
        class="add-to-category-field"
        placeholder="Type a new category"
        v-model="newCategory"
      />
      <button
        class="add-to-list-btn"
        @click="addToCategory"
        :title="addCategoryTolltip"
      >
        ADD a category
      </button>
      <button class="add-to-list-btn" @click="addToList" :title="addTolltip">
        ADD a note to the list
      </button>
    </div>
    <button class="add-to-list-btn" @click="resetForm" :title="clearTolltip">
      CLEAR input data
    </button>
  </div>
</template>

<script>
export default {
  name: "AddToShoppingList",
  data() {
    return {
      addTolltip: "Добавить заметку в список",
      addCategoryTolltip: "Добавить новую категорию в список",
      clearTolltip: "Очистить поля ввода данных",
      newCategory: "",
      date: "",
      value: "",
      category: "",
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
    categoryList() {
      return this.$store.getters.getCategoryList;
    },
    shoppingList() {
      return this.$store.getters.getShoppingList;
    },
    length() {
      return this.shoppingList.length;
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
        id: this.length + 1,
        value: +this.value,
        category: this.category,
        date: this.date || this.getCurrentDate,
      };
      this.$store.commit("addDataToShoppingList", data);
    },
    addToCategory() {
      if (!this.categoryList.includes(this.newCategory)) {
        this.$store.commit("addDataToCategoryList", this.newCategory);
        this.newCategory = "";
      }
    },
  },
  //получение и присвоение данных при отрисовке
  mounted() {
    this.value = this.$route.query.value;
    this.category = this.$route.params.category;
    if (this.value && this.category) {
      this.addToList();
      alert("Добавлен новый элемент в список");
    } else {
      alert(
        "Заполните данные в форме и нажмите кнопку 'ADD a note to the list'"
      );
    }
  },
};
</script>

<style scoped>
.add-to-list {
  width: 700px;
  margin: 20px auto;
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
  min-width: 100px;
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
.add-to-category-field,
.add-to-category-list-field {
  width: 600px;
  height: 30px;
  margin: 10px 0;
  box-shadow: 0px 0px 3px black;
  border: none;
  border-radius: 5px;
  padding-left: 20px;
}
.options {
  font-size: 12px;
}
.add-to-category-list-field {
  width: 621px;
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
