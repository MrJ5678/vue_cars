<template>
  <div>
    <section class="cars-item">
      <header>
        <h4 class="cars-logo">
          <img src="../../assets/images/cars-logo.png" alt="mustang 2020款" />
          <span class="name">mustang 2020款</span>
        </h4>
        <p class="cars-attr">新能源 5座</p>
      </header>
      <div class="cars-content">
        <div class="info">
          <div>
            <h4 class="cars-num">黑A 49503</h4>
            <div>
              <ul class="cars-elec active-li-9">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <p class="cars-distance">
                <sub>约</sub>
                <span>600</span>
                <sub>KM</sub>
              </p>
            </div>
          </div>
        </div>
        <img src="../../assets/images/pic001.jpg" alt="car" />
      </div>
      <footer>
        <a href="javascript: void(0);" class="parking-link">某某停车场</a>
      </footer>
    </section>
    <section class="cars-item cars-detail" :style="'height:' + height ">
      <div class="scroll">
        <h4 class="column">某停车场
          <i class="close"></i>
        </h4>
        <header>
          <h4 class="cars-logo">
            <img src="../../assets/images/cars-logo.png" alt="mustang 2020款" />
            <span class="name">mustang 2020款</span>
          </h4>
          <p class="cars-attr">新能源 5座</p>
        </header>
        <img src="../../assets/images/pic001.jpg" alt="car" width="100%"/>
        <div class="clearfix">
          <div class="fs-24 pull-left">黑A 49503</div>
          <p class="cars-distance pull-right">
            <sub>约</sub>
            <span>600</span>
            <sub>KM</sub>
          </p>
        </div>
        <div class="cars-elec-box">
          <div class="p-r">
            <span class="e-hlight" style="width: 80%"></span>
            <span class="e-bg"></span>
          </div>
        </div>
        <p class="info color-main text-center">取车约支付12.0元停车费, 实际补贴12.0元</p>
        <ul class="cars-type-list">
          <li class="current">
            <h4 class="name pull-left">日租车</h4>
            <span class="price pull-right">¥300/天</span>
          </li>
          <li>
            <h4 class="name pull-left">日租车</h4>
            <span class="price pull-right">¥300/天</span>
          </li>
          <li>
            <h4 class="name pull-left">日租车</h4>
            <span class="price pull-right">¥300/天</span>
          </li>
          <li>
            <h4 class="name pull-left">日租车</h4>
            <span class="price pull-right">¥300/天</span>
          </li>
        </ul>
        <div class="clause-dec clearfix">
          <span class="pull-left">参保《全面保障服务》用车更放心</span>
          <i class="pull-right current"></i>
        </div>
      </div>
      <a href="javascript: void(0);" class="select-car-btn">预约车辆</a>
    </section>
  </div>
</template>

<script>
export default {
  name: "CarsList",
  props: {
    height: {
      type: String,
      default: "257px"
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
