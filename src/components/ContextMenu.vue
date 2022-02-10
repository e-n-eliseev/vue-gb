<template>
  <v-card>
    <v-container>
      <v-row class="ma-1">
        <v-dialog width="700">
          <template v-slot:activator="{ on }">
            <v-btn class="text-body-2 ma-1" v-on="on" :ripple="false" text>
              <v-icon>mdi-delete </v-icon> Редактировать
            </v-btn>
          </template>
          <v-card>
            <AddToShoppingList
              :item="item"
              :arrId="id + firstItemId"
              :addButtonVision="true"
            />
          </v-card>
        </v-dialog>
      </v-row>
      <v-row class="ma-1">
        <v-btn
          class="text-body-2 ma-1"
          :ripple="false"
          @click="deleteItemFromTheList"
          text
          ><v-icon>mdi-pencil </v-icon> Удалить
        </v-btn>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import AddToShoppingList from "./AddToShoppingList.vue";
export default {
  name: "ContextMenu",
  components: {
    AddToShoppingList,
  },
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      default: null,
    },
    id: {
      type: Number,
      default: () => 0,
    },
    firstItemId: {
      type: Number,
      default: () => 0,
    },
  },
  methods: {
    deleteItemFromTheList() {
      this.$store.commit(
        "deleteDataToShoppingList",
        this.id + this.firstItemId
      );
    },
  },
};
</script>


<style lang="scss" scoped>
// .wrapperContext {
//   position: absolute;
//   width: 165px;
//   height: 100px;
//   box-shadow: 0 0 5px black;
//   top: 10px;
//   left: 10px;
//   background-color: white;
//   padding: 10px 0;
//   transition: 0.2s;
//   border-radius: 5px;
// }
// .context-menu-btn {
//   background: transparent;
//   border: none;
//   margin: 10px 0;
//   width: 100%;
//   height: 30px;
// }
// .context-menu-btn:hover {
//   background-color: rgb(226, 224, 224);
// }
</style>