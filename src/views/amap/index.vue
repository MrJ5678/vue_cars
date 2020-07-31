<template>
  <div class="amap-wrap">
    <el-amap 
      vid="amapContainer" 
      class="amapDemo"
      :events="events"
    >
    </el-amap>
  </div>
</template>

<script>
import { lazyAMapApiLoaderInstance } from 'vue-amap'

export default {
  name: 'AMap',
  data() {
    return {
      map: null,
      zoom: 12,
      events: {}
    }  
  },
  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      this.map = new AMap.Map('amapContainer', {
        center: new AMap.LngLat(126.551827, 45.79145),
        zoom: this.zoom
      })
    })
  }
}
</script>

<style lang="scss" scoped>
  .amap-wrap {
    height: 100vh;
  }
</style>