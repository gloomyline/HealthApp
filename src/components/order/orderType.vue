<template>
  <div :class="orderClass">
    <p>This is orderType!{{$route.params.type}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    computed: {
      orderClass () {
        return 'order-' + this.$route.params.type
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
