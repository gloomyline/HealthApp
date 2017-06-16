<template>
  <div class="pay-page">
    <title-wrapper title="付款" @close-page="cancelPay"></title-wrapper>
    <group class="order-info">
      <cell-box class="service-info">
        <div class="service">
          <span class="name">服务内容:</span>
          <span class="text"></span>
        </div>
        <div class="service">
          <span class="name">上门时间:</span>
          <span class="text"></span>
        </div>
        <div class="service">
          <span class="name">服务地址:</span>
          <span class="text"></span>
        </div>
        <div class="service">
          <span class="name">联系电话:</span>
          <span class="text"></span>
        </div>
        <div class="service">
          <span class="name">总金额&#3000;:</span>
          <span class="text"></span>
        </div>
      </cell-box>
    </group>
  </div>
</template>

<script type="text/ecmascript-6">
  import titleWrapper from '@/components/uiComponents/titleWrapper'
  import { Group, Cell, CellBox } from 'vux'

  export default{
    methods: {
      cancelPay () {
        this.$emit('cancel-pay')
      }
    },
    components: {
      Group,
      Cell,
      CellBox,
      titleWrapper
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
