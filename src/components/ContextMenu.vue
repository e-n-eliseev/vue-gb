<template>
  <v-card>
    <v-container>
      <v-row class="ma-1">
        <v-dialog v-model="dialog" width="700">
          <template v-slot:activator="{ on }">
            <v-btn
              class="text-body-2 ma-1"
              v-on="on"
              @click="close"
              :ripple="false"
              text
            >
              <v-icon>mdi-delete </v-icon> Редактировать
            </v-btn>
          </template>
          <v-card>
            <AddToShoppingList
              @close="dialog = false"
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
    return {
      dialog: false,
    };
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
    close() {
      console.log("close");
    },
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
</style>