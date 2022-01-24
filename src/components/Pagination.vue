<template>
  <div class="paggination">
    <button class="paggination-btn" @click="showPrevious">
      <span class="paggination-icon" :title="prevTolltip">☚</span>
    </button>
    <div
      class="paggination-page"
      v-for="item in getPagginatorPages"
      :key="item"
      :class="{ active: item == activePage }"
      @click="choosePage(item)"
    >
      {{ item }}
    </div>
    <button class="paggination-btn" @click="showNext">
      <span class="paggination-icon" :title="nextTolltip">☛</span>
    </button>
    <div>
      <label
        ><input
          type="radio"
          name="number"
          v-model="number"
          value="5"
          @change="changeLength"
        />5</label
      >
      <label
        ><input
          type="radio"
          name="number"
          v-model="number"
          value="10"
          @change="changeLength"
        />10</label
      >
      <label
        ><input
          type="radio"
          name="number"
          v-model="number"
          value="15"
          @change="changeLength"
        />15</label
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    pages: {
      type: Number,
      default: () => 1,
    },
  },
  data() {
    return {
      prevTolltip: "Перейти к предыдущей странице",
      nextTolltip: "Перейти к следующей странице",
      activePage: 1,
      number: 5,
    };
  },
  computed: {
    getPagginatorPages() {
      return Math.ceil(this.pages / +this.number);
    },
  },
  methods: {
    choosePage(item) {
      this.activePage = item;
      this.$emit("changePage", this.activePage);
    },
    changeLength() {
      this.activePage = 1;
      this.$emit("changeSize", +this.number);
    },
    showPrevious() {
      this.activePage == 1
        ? (this.activePage = this.getPagginatorPages)
        : this.activePage--;
      this.$emit("changePage", this.activePage);
    },
    showNext() {
      this.activePage == this.getPagginatorPages
        ? (this.activePage = 1)
        : this.activePage++;
      this.$emit("changePage", this.activePage);
    },
  },
};
</script>

<style scoped>
.paggination {
  padding: 10px;
  display: flex;
  gap: 20px;
  box-shadow: 0 0 5px black;
  align-items: center;
}
.paggination-page {
  font-size: 12px;
  height: 20px;
  width: 20px;
  line-height: 20px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.paggination-page:hover {
  transform: scale(2);
}
.active {
  color: red;
  transform: scale(2);
}
.paggination-btn {
  border: none;
  background: white;
  height: 20px;
  width: 20px;
  position: relative;
  cursor: pointer;
  margin: 0 20px;
  transition: 0.2s ease-in-out;
}
.paggination-btn:hover {
  transform: scale(2);
}
.paggination-icon {
  position: absolute;
  display: block;
  top: 0;
}
</style>
