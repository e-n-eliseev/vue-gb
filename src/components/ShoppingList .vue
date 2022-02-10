<template>
  <v-simple-table>
    <template>
      <thead>
        <tr>
          <th class="text-left">#</th>
          <th class="text-left">Date</th>
          <th class="text-left">Category</th>
          <th class="text-left">Value</th>
          <th class="text-left"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in shoppingList" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.value }}</td>
          <td>
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
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
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
</style>
