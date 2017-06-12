<template>
  <div>
    <h1>这里是订单</h1>
    <div class="order-tab">
      <router-link to="/order/massage">按摩</router-link>
      <router-link to="/order/children">小儿</router-link>
      <router-link to="/order/SPA">SPA</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import router from '../../router'

  export default {
    beforeRouteEnter (to, from, next) {
      next(vm => {
        // default to massage type
        if (vm.$route.params !== 'massage') {
          router.push('/order/massage')
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
