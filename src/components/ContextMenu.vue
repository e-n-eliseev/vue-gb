<template>
  <v-card>
    <v-dialog v-model="dialog" width="700">
      <template v-slot:activator="{ on }">
        <v-btn class="text-body-2 ma-1" v-on="on" :ripple="false" plain>
          <v-icon>mdi-delete </v-icon> Редактировать
        </v-btn>
      </template>
      <v-card>
        <AddToShoppingList />
      </v-card>
    </v-dialog>
    <v-btn
      class="text-body-2 ma-1"
      :ripple="false"
      plain
      @click="deleteItemFromTheList"
      ><v-icon>mdi-pencil </v-icon> Удалить
    </v-btn>
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
    return {
      dialog: false,
    };
  },
  props: {
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