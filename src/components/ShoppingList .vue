<template>
  <v-container>
    <v-row class="ma-1">
      <v-col :cols="2">#</v-col>
      <v-col :cols="3">Date</v-col>
      <v-col :cols="4">Category</v-col>
      <v-col :cols="2">Value</v-col>
      <v-col :cols="1"></v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="ma-1" v-for="item in shoppingList" :key="item.id">
      <v-col :cols="2">{{ item.id }}</v-col>
      <v-col :cols="3">{{ item.date }}</v-col>
      <v-col :cols="4">{{ item.category }}</v-col>
      <v-col :cols="2">{{ item.value }}</v-col>
      <v-col :cols="1">
        <v-menu :offset-y="true">
          <template v-slot:activator="{ on }">
            <v-btn :key="item.id" x-small icon v-on="on" :ripple="false">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-card>
            <ContextMenu
              :item="item"
              :id="shoppingList.indexOf(item)"
              :firstItemId="firstItemId"
            />
          </v-card>
        </v-menu>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </v-container>
</template>

<script>
import ContextMenu from "./ContextMenu.vue";
export default {
  name: "ShoppingList",
  components: {
    ContextMenu,
  },
  data() {
    return {};
  },
  props: {
    shoppingList: {
      type: Array,
      default: () => [],
    },
    firstItemId: {
      type: Number,
      default: () => 0,
    },
  },
  methods: {},
};
</script>

<style scoped>
/* .shopping-list {
  width: 700px;
  margin: 20px 0;
  padding: 10px;
  border: 1px solid black;
  box-shadow: 0 0 5px black;
  border-radius: 10px;
}
.shopping-list-header,
.shopping-list-items {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  position: relative;
}
.shopping-list-item {
  position: relative;
  flex: 1 0 25%;
  font-size: 12px;
  margin: 10px 0;
}
.shopping-list-items::before {
  content: "";
  width: 600px;
  height: 1px;
  position: absolute;
  border-top: 1px solid #bbb;
  top: 0px;
}
.shopping-list-item__header {
  font-size: 15px;
  font-weight: 600;
}
.context-menu-btn {
  background-color: transparent;
  border: none;
  width: 20px;
  height: 20px;
}
.context-menu-btn:hover {
  cursor: pointer;
}
.context-menu-btn-icon,
.context-menu-btn-icon::before,
.context-menu-btn-icon::after {
  display: block;
  width: 5px;
  height: 5px;
  background-color: black;
  border-radius: 50%;
}
.context-menu-btn-icon {
  position: relative;
}
.context-menu-btn-icon::before {
  content: "";
  position: absolute;
  top: 7px;
}
.context-menu-btn-icon::after {
  content: "";
  position: absolute;
  top: -7px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
} */
</style>
