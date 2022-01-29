<template>
  <div class="paggination" @click="pagginatorRoute">
    <button class="paggination-btn" @click="showPrevious">
      <span class="paggination-icon" :title="prevTolltip">☚</span>
    </button>
    <div
      class="paggination-page"
      v-for="item in pagginatorPages"
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
          v-model="newPageSize"
          value="5"
          @change="changeLength"
        />5</label
      >
      <label
        ><input
          type="radio"
          name="number"
          v-model="newPageSize"
          value="10"
          @change="changeLength"
        />10</label
      >
      <label
        ><input
          type="radio"
          name="number"
          v-model="newPageSize"
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
    length: {
      type: Number,
      default: () => 1,
    },
    activePage: {
      type: Number,
      default: () => 1,
    },
    pageSize: {
      type: Number,
      default: () => 1,
    },
  },
  data() {
    return {
      prevTolltip: "Перейти к предыдущей странице",
      nextTolltip: "Перейти к следующей странице",
      newPageSize: this.pageSize,
    };
  },
  computed: {
    pagginatorPages() {
      return Math.ceil(this.length / +this.pageSize);
    },
  },
  methods: {
    pagginatorRoute() {
      if (this.activePage == this.$route.params.activePage) {
        return;
      }
      this.$router.push({
        name: "ShoppingPages",
        params: {
          activePage: this.activePage,
        },
      });
    },
    choosePage(item) {
      this.$emit("changePage", item);
    },
    changeLength() {
      this.$emit("changePage", 1);
      this.$emit("changeSize", +this.newPageSize);
    },
    showPrevious() {
      this.activePage == 1
        ? this.$emit("changePage", this.pagginatorPages)
        : this.$emit("changePage", this.activePage - 1);
    },
    showNext() {
      this.activePage == this.pagginatorPages
        ? this.$emit("changePage", 1)
        : this.$emit("changePage", this.activePage + 1);
    },
  },
};
</script>

<style scoped>
.paggination {
  padding: 10px;
  margin: 20px;
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
