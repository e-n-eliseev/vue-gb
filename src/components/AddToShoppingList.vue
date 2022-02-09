<template>
  <v-card class="pa-8">
    <v-text-field label="Цена" placeholder="Value" v-model.number="value" />
    <v-select
      :items="categoryList"
      v-model="category"
      label="Категория"
    ></v-select>
    <v-text-field label="Дата" placeholder="Date" v-model="date" />
    <v-row>
      <v-text-field
        class="pr-10 pl-3"
        label="Новая категория"
        placeholder="New Catecory"
        v-model="newCategory"
      />
      <v-btn
        class="text-body-2 ma-1"
        :ripple="false"
        elevation="2"
        color="teal"
        dark
        @click="addToCategory"
      >
        ADD a category</v-btn
      >
    </v-row>
    <v-row>
      <v-btn
        class="text-body-2 ma-1"
        :ripple="false"
        elevation="2"
        color="teal"
        dark
        @click="addToList"
      >
        ADD a note to the list</v-btn
      >
    </v-row>
    <v-row>
      <v-btn
        class="text-body-2 ma-1"
        :ripple="false"
        elevation="2"
        color="teal"
        dark
        v-if="addButtonVision"
        @click="changeDataInTheList"
      >
        ADD a note to the list</v-btn
      >
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "AddToShoppingList",
  data() {
    return {
      newCategory: "",
      id: "",
      date: "",
      value: "",
      category: "",
      addButtonVision: false,
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
        id: this.shoppingList[this.length - 1].id + 1,
        value: +this.value || 0,
        category: this.category,
        date: this.date || this.getCurrentDate,
      };
      console.log(data);
      this.$store.commit("addDataToShoppingList", data);
    },
    addToCategory() {
      if (!this.categoryList.includes(this.newCategory)) {
        this.$store.commit("addDataToCategoryList", this.newCategory);
        this.newCategory = "";
      }
    },
    changeDataInTheList() {
      const data = {
        itemPos: this.$attrs.settings?.itemPos,
        id: +this.id,
        value: +this.value,
        category: this.category,
        date: this.date || this.getCurrentDate,
      };
      console.log(data);
      this.$store.commit("changeDataToShoppingList", data);
    },
  },
  //получение и присвоение данных при отрисовке
  mounted() {
    if (this.value && this.category && !this.addButtonVision) {
      this.addToList();
      alert("Добавлен новый элемент в список");
    }
  },
};
</script>

<style scoped>
.add-to-list {
  max-width: 700px;
  margin: 20px auto;
  padding: 10px 37px 10px;
  border: 1px solid black;
  box-shadow: 0 0 5px black;
  display: flex;
  background-color: aliceblue;
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
  max-width: 621px;
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
