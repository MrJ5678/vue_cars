<template>
  <div class="user-container">
    <div class="user-info">
      <img src="../../assets/images/face.png" alt="avatar">
      <div class="meta">
        <h4 class="name">1287@qq.com</h4>
        <span>文明驾驶<i>0</i>分</span>
      </div>
    </div>
    <ul class="links-group">
      <router-link to="aa" tag="a" class="arrow">
        <i class="icon icon-user-link-1"></i>
        我的订单
      </router-link>
      <router-link to="aa" tag="a" class="arrow">
        <i class="icon icon-user-link-2"></i>
        租车订单
      </router-link>
      <router-link to="aa" tag="a" class="arrow">
        <i class="icon icon-user-link-3"></i>
        实名认证
      </router-link>
      <router-link to="/safe" tag="a" class="arrow">
        <i class="icon icon-user-link-4"></i>
        安全设置
      </router-link>
      <router-link to="aa" tag="a" class="arrow">
        <i class="icon icon-user-link-5"></i>
        我的账户
      </router-link>
    </ul>
    <button class="logout">登出</button>
  </div>
</template>

<script>
export default {
  name: 'User'
}
</script>

<style lang="scss" scoped>
@import './index.scss';
.logout {
  position: absolute;
  bottom: 100px;
  left: 50%;
  margin-left: -83px;
  width: 165px;
  height: 58px;
  line-height: 58px;
  text-align: center;
  border-radius: 100px;
  color: #fff;
  font-size: 18px;
  background-color: #41a0ff;
  border: none;
  outline: none;
}
</style>