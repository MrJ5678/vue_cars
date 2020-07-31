<template>
  <div>
    <!-- Dom渲染 -->
    <Cars />
    <!-- 地图 -->
    <Map />
    <!-- 导航 -->
    <NavBar />
    <!-- 会员 -->
    <!-- <div class="children-view" :class="[show ? 'open' : '']"> -->
    <div class="children-view" :class="{open: show}">
      <router-view />
    </div>
  </div>
</template>

<script>
import Map from '@/views/amap'
import Cars from '@/views/cars'
import NavBar from '@/components/navBar'

export default {
  name: 'Index',
  components: { 
    Map,
    Cars,
    NavBar
  },
  data() {
    return {
      
    }
  },
  computed: {
    show() {
      // console.log(this.$route);
      return this.$route.name === "Index" ? false : true
    }
  },
  watch: {
    // "$route": {
    //   handler(newValue) {
    //     const { name } = newValue
    //     console.log(newValue);
    //     console.log(name);
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
  .children-view {
    position: fixed;
    right: -600px;
    top: 0;
    bottom: 0;
    width: 418px;
    background-color: #34393f;
    z-index: 20;
    -webkit-transition: all .3s ease 0s;
    -moz-transition: all .3s ease 0s;
    -ms-transition: all .3s ease 0s;
    -o-transition: all .3s ease 0s;
    transition: all .3s ease 0s;
    &.open {
      right: 0;
    }
  }
</style>