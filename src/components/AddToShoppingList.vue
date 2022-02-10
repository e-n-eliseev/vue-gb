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
        v-if="!addButtonVision"
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
        Save changes</v-btn
      >
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "AddToShoppingList",
  props: {
    item: {
      type: Object,
      default: null,
    },
    arrId: {
      type: Number,
      default: () => 0,
    },
    firstItemId: {
      type: Number,
      default: () => 0,
    },
    addButtonVision: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      newCategory: "",
      id: this.item?.id || "",
      date: this.item?.date || "",
      value: this.item?.value || "",
      category: this.item?.category || "",
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
        category: this.category || "Без названия",
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
        itemPos: this.arrId,
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
</style>
