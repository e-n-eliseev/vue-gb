<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="wrapper">
          <h1>My personal shipping list.</h1>
          <v-dialog v-model="dialog" width="700">
            <template v-slot:activator="{ on }">
              <v-btn
                class="text-body-2 ma-2"
                :ripple="false"
                elevation="2"
                color="teal"
                dark
                v-on="on"
                :title="addFormTolltip"
              >
                Add new cost <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>
            <v-card>
              <AddToShoppingList />
            </v-card>
          </v-dialog>

          <ShoppingList
            v-if="length"
            :shoppingList="shoppingList.slice(this.firstItem, this.lastItem)"
            :firstItemId="this.firstItem"
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
      </v-col>
      <v-col>
        <template>
          <Doughnut :chartdata="chartdata" :options="options" />
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Doughnut from "./Doughnut.vue";
export default {
  name: "ShoppingPage",
  components: {
    ShoppingList: () => import("./ShoppingList .vue"),
    Pagination: () => import("./Pagination.vue"),
    AddToShoppingList: () => import("./AddToShoppingList.vue"),
    Doughnut,
  },
  data() {
    return {
      addFormTolltip: "Открыть/закрыть окно добавления элемента списка",
      quickAddFormTolltip: "кнопка быстрого добавления товара",
      pageSize: 5,
      activePage: 1,
      dialog: false,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "Соотношение текущих трат",
        },
      },
    };
  },
  computed: {
    chartdata() {
      return {
        labels: this.categoryListChart,
        datasets: [
          {
            label: "Соотношение текущих трат",
            backgroundColor: this.getCategoryColor,
            data: this.getCategoryCostChart,
          },
        ],
      };
    },
    getFSV() {
      return this.$store.getters.getFullShoppingValue;
    },
    getCategoryColor() {
      return this.categoryListChart.map(
        () => `#${Number.parseInt(Math.random() * 1000000)}`
      );
    },
    getCategoryCostChart() {
      return this.getCategoryCost.filter((item) => item > 0);
    },
    getCategoryCost() {
      const categoryCosts = this.categoryList.map((element) => {
        return this.shoppingList.reduce((acc, item) => {
          if (item.category == element) {
            acc = acc + item.value;
            return acc;
          }
          return acc;
        }, 0);
      });
      return categoryCosts;
    },
    shoppingList() {
      return this.$store.getters.getShoppingList;
    },

    categoryListChart() {
      return this.categoryList.filter((item, idx) => {
        return this.getCategoryCost[idx] > 0;
      });
    },
    categoryList() {
      return this.$store.getters.getCategoryList;
    },
    length() {
      return this.shoppingList.length;
    },
    lastItem() {
      return this.activePage * this.pageSize;
    },
    firstItem() {
      return this.lastItem - this.pageSize;
    },
  },
  // watch() {
  //   this.chartdata.data;
  // },
  methods: {
    changeSize(number) {
      this.pageSize = number;
      this.lastItem;
      this.firstItem;
    },
    showPage(page) {
      this.activePage = page;
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
/* .showAddToshoppingListFormBtn {
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
} */
.quick-add {
  display: flex;
  flex-direction: column;
}
</style>