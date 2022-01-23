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
    <button class="add-to-list-btn" @click="addToList" :title="addTolltip">
      ADD +
    </button>
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
  },
  data() {
    return {
      addTolltip: "Добавить заметку в список",
      clearTolltip: "Очистить поля ввода данных",
      value: "",
      category: "",
      date: "",
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
  margin: 10px;
}
.add-to-list-btn:active {
  transform: translateY(5px);
  box-shadow: 0 0px 0px black;
}
.add-to-list-field {
  width: 600px;
  height: 30px;
  margin: 10px 0;
  box-shadow: 0px 0px 3px black;
  border: none;
  border-radius: 5px;
  padding-left: 20px;
}
</style>
