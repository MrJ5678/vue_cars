<template>
  <div class="navBar">
    <ul>
      <li><i class="icon icon-help icon-44"></i></li>
      <li><i class="icon icon-search icon-44"></i></li>
      <li>
        <a href="javascript: void(0);" class="select-car-btn">选择车辆</a>
      </li>
      <li><i class="icon icon-location icon-44"></i></li>
      <li><i class="icon icon-user icon-44" @click="toUser"></i></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    toUser() {
      this.$router.push({ name: "User" });
    },
  },
};
</script>

<style lang="scss" scoped>
.navBar {
  position: fixed;
  bottom: 86px;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
  color: #000;
  ul {
    li {
      display: inline-block;
      .icon {
        margin: 0 17px;
        vertical-align: middle;
        cursor: pointer;
        background-color: $color-main;
        border-radius: 50%;
      }
    }
  }
}
</style>
