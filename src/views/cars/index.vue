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
      <div class="cars-content"></div>
      <footer></footer>
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