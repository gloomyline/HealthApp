<template>
  <div class="star" :class="starType">
    <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  const LENGTH = 5
  const CLS_ON = 'on'
  const CLS_HALF = 'half'
  const CLS_OFF = 'off'

  export default{
    props: {
      size: {
        type: Number
      },
      score: {
        type: Number,
        default: 5
      }
    },
    computed: {
      starType () {
        return 'star-' + this.size
      },
      itemClasses () {
        let starArr = []
        let score = Math.floor(this.score * 2) / 2
        let hasDecimal = (score % 1 !== 0)
        let integer = Math.floor(score)
        for (let i = 0; i < integer; i++) {
          starArr.push(CLS_ON)
        }
        if (hasDecimal) {
          starArr.push(CLS_HALF)
        }
        while (starArr.length < LENGTH) {
          starArr.push(CLS_OFF)
        }

        return starArr
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixin"

  .star
    font-size 0
    &.star-48
      .star-item
        margin-right 22px
        inline-icon(20px, 20px)
        &:last-child
          margin-right 0
        &.on
          bg-img('star48_on')
        &.half
          bg-img('star48_half')
        &.off
          bg-img('star48_off')
    &.star-36
      .star-item
        margin-right 6px
        inline-icon(15px, 15px)
        &:last-child
          margin-right 0
        &.on
          bg-img('star36_on')
        &.half
          bg-img('star36_half')
        &.off
          bg-img('star36_off')
    &.star-24
      .star-item
        margin-right 3px
        inline-icon(10px, 10px)
        &:last-child
          margin-right 0
        &.on
          bg-img('star24_on')
        &.half
          bg-img('star24_half')
        &.off
          bg-img('star24_off')
</style>
