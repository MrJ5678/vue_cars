<template>
  <div class="user-container">
    <Back column="安全设置"/>
    <ul class="links-group">
      <router-link to="aa" tag="a" class="arrow">
        <i class="icon icon-user-link-1"></i>
        修改登录密码
      </router-link>
      <router-link to="aa" tag="a" class="arrow">
        <i class="icon icon-user-link-2"></i>
        设置资金密码
      </router-link>
      <router-link to="aa" tag="a" class="arrow">
        <i class="icon icon-user-link-3"></i>
        绑定手机号
      </router-link>
      <router-link to="aa" tag="a" class="arrow">
        <i class="icon icon-user-link-4"></i>
        绑定银行卡
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Safe'
}
</script>

<style lang="scss" scoped>
// @import './index.scss';
</style>