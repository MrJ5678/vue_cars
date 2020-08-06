<template>
  <div class="header-back">
    <div class="back">
      <i class="icon"></i>
      <h4 class="title">{{ column }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Back",
  props: {
    column: {
      type: String,
      default: ""
    }
  }
}
</script>

<style lang="scss" scoped>
.header-back {
  position: relative;
  padding-bottom: 147px;

  .back {
    position: absolute;
    top: 21px;
    left: 0;
    height: 40px;
    line-height: 40px;

    .icon {
      position: absolute;
      left: 0;
      top: 0;
      // background-color: #fff;
      width: 40px;
      height: 40px;
      &::before {
        content: "";
        position: absolute;
        top: 12px;
        left: 8px;
        width: 14px;
        height: 14px;
        border-top: 2px solid $color-blur;
        border-left: 2px solid $color-blur;
        @include webkit(transform, rotate(-45deg));
        cursor: pointer;
      }
    }

    .title {
      font-size: 18px;
      margin-left: 42px;
      color: #fff;
    }
  }
}
</style>