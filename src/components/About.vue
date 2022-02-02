<template>
  <div class="about">
    <h1>This page will note your shopping list</h1>
    <button class="add-to-list-btn" @click="onShowModalAuth">Auth</button>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      modalShow: true,
      settings: {
        header: "Auth Form",
        content: "Auth",
      },
    };
  },
  methods: {
    onShowModalAuth() {
      this.$modal.show("Auth", this.settings);
    },
  },
};
</script>

<style lang="scss" scoped>
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
}
.add-to-list-btn:active {
  transform: translateY(5px);
  box-shadow: 0 0px 0px black;
}
</style>