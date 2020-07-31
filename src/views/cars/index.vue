<template>
  <div class="index-wrap">
    <section class="cars-item">
      <header>
        <h4 class="cars-logo">
          <img src="../../assets/images/cars-logo.png" alt="mustang 2020款">
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
        <img src="../../assets/images/pic001.jpg" alt="car">
      </div>
      <footer>
        <a href="javascript: void(0);" class="parking-link">某某停车场</a>
      </footer>
    </section>
    <span @click="clickUser">carscarscarscarscarscarscarscarscarscars</span>
  </div>
</template>

<script>
export default {
  name: 'Cars',
  methods: {
    clickUser() {
      this.$router.push({
        name: "User"
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>