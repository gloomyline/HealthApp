<template>
  <div class="order-item">
    <div class="content">
      <div class="content-left">
        <img :src="item.img" width="98" height="76" class="item-img"
             onerror="this.src='http://192.168.1.128:9999/static/imgs/default-item.png'">
      </div>
      <div class="content-right">
        <h2 class="item-name">
          <span class="text">{{item.name}}</span>
        </h2>
        <div class="star-wrapper">
          <star class="star" :size="24" :score="item.score"></star>
          <span class="score">{{item.score}}</span>
          <span class="price">&yen;{{item.price}}/人</span>
        </div>
        <div class="extra">
          <span class="desc">{{item.desc}}</span>
          <span class="choose-count">已有{{item.chooseCount}}人选择</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import star from '@/components/uiComponents/star'
  export default{
    props: {
      item: {
        type: Object,
        default () {
          return {
            name: '精品水疗养生SPA套餐',
            score: 5,
            price: 153,
            desc: '实力派按摩套餐',
            chooseCount: 200
          }
        }
      }
    },
    components: {
      star
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .order-item
    width 361px
    height 100px
    border-radius 6px
    background #fff
    box-shadow 2px 5px 5px rgba(88, 79, 96, .35)
    .content
      display flex
      position relative
      padding 12px 8px 12px
      .content-left
        flex 0 0 98px
        width 98px
        margin-right 13px
      .content-right
        flex 1
        padding-top 3px
        .item-name
          line-height 24px
          font-size 15px
          font-weight border
        .star-wrapper
          font-size 0
          line-height 20px
          .star
            display inline-block
            vertical-align top
            margin-right 10px
            padding-top 4px
          .score
            display inline-block
            vertical-align top
            margin-right 14px
            font-size 13px
            color #fcd344
          .price
            display inline-block
            vertical-align top
            font-size 13px
            color #9c9c9c
        .extra
          line-height 24px
          font-size 0
          .desc
            font-size 13px
            color #ff6f36
          .choose-count
            position absolute
            right 8px
            bottom 12px
            font-size 12px
            color #9c9c9c
</style>
