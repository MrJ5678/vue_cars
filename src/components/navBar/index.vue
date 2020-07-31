<template>
  <div class="navBar">
    <ul>
      <li><i class="icon icon-help"></i></li>
      <li><i class="icon icon-search"></i></li>
      <li><a href="javascript: void(0);" class="select-car-btn">选择车辆</a></li>
      <li><i class="icon icon-location"></i></li>
      <li><i class="icon icon-user"></i></li>
      
    </ul>
  </div>
</template>

<script>
export default {

}
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
        }
        .select-car-btn {
          display: block;
          width: 240px;
          height: 84px;
          margin: 0 17px;
          border-radius: 100px;
          line-height: 84px;
          text-align: center;
          color: #fff;
          font-size: 26px;
          font-weight: normal;
          background-color: $color-main;
        }
      }
    }
  }

  
</style>