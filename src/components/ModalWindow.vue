<template>
  <div class="wrapper">
    <div class="header">
      {{ settings.header }}
    </div>
    <div class="content">
      <component :is="settings.content" />
    </div>
    <div class="footer">
      <button class="add-to-list-btn" @click="onClose">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    AddToShoppingList: () => import("./AddToShoppingList.vue"),
    Auth: () => import("./Auth.vue"),
  },
  props: {
    settings: Object,
  },
  name: "ModalWindow",
  methods: {
    onClose() {
      this.$modal.hide();
    },
  },
};
</script>


<style lang="scss" scoped>
.header {
  font-size: 25px;
  font-weight: 600;
}
.wrapper {
  border: 3px solid red;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffffd9;
  & .overlay {
    z-index: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(68, 61, 61, 0.5);
  }
  & .content {
    position: relative;
    z-index: 100;
  }
  & .footer {
    top: 140px;
    position: relative;
    z-index: 100;
  }
  .add-to-list-btn {
    color: aliceblue;
    background: green;
    border-radius: 10px;
    min-width: 100px;
    height: 30px;
    box-shadow: 0 5px 5px black;
    border: none;
    align-self: flex-end;
    transition: 0.1s ease-in-out;
    margin: 10px 0;
    &:active {
      transform: translateY(5px);
      box-shadow: 0 0px 0px black;
    }
  }
}
</style>