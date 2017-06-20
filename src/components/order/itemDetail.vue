<template>
  <div class="item-detail-page">
    <title-wrapper title="套餐详情" @close-page="closeDetail"></title-wrapper>
    <div class="content-wrapper">
      <div class="content">
        <div class="avatar">
          <img src="http://localhost:9999/static/imgs/default-item.png">
        </div>
        <div class="infos">
          <div class="name">
            <span class="text">精品水疗养生SPA套餐</span>
          </div>
          <div class="price-star">
            <span class="price">&yen;<span class="price-num">1530</span>套餐价</span>
            <star class="star" :size="36" :score="5" has-score></star>
          </div>
          <div class="extra">
            <span class="share"></span>
            <span class="favorite" :class="{favorited:isFavorite}" @click="toggleFavorite"></span>
          </div>
        </div>
        <div class="item-content">
          <h2 class="title">套餐内容</h2>
          <div class="item-content-detail">
            <div class="name">水疗SPA <span>1</span>份</div>
            <ul class="detail-list">
              <li class="detail-item">柔情玫瑰软肤 20分钟</li>
              <li class="detail-item">玫瑰香薰泡浴 20分钟</li>
              <li class="detail-item">美肌紧肤油压 20分钟</li>
              <li class="detail-item">玫瑰美白裹肤 20分钟</li>
            </ul>
            <div class="desc">一个套餐5次，每次时长：80分钟</div>
          </div>
        </div>
        <div class="item-ratings">
          <h2 class="title">用户评价</h2>
        </div>
      </div>
    </div>
    <div class="foot-wrapper">
      <div class="price">&yen;1530</div>
      <div class="order-btn" @click="orderNow"><span class="label">立即下单</span></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import titleWrapper from '@/components/uiComponents/titleWrapper'
  import star from '@/components/uiComponents/star'

  export default{
    data () {
      return {
        isFavorite: false
      }
    },
    methods: {
      closeDetail () {
        this.$emit('close-item-page')
      },
      toggleFavorite () {
        if (!this.isFavorite) { // 添加收藏
          this.isFavorite = true
        } else {                // 取消收藏
          this.isFavorite = false
        }
      },
      orderNow () {
        console.log('立即下单')
      }
    },
    components: {
      titleWrapper,
      star
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .item-detail-page
    position fixed
    left 0
    top 0
    bottom 0
    width 100%
    height 100%
    background #f1f1f1
    .content-wrapper
      height 100%
      overflow hidden
      .content
        .avatar
          position relative
          height 0
          padding-top 45%
          img
            position absolute
            left 0
            top 0
            width 100%
            height 100%
        .infos
          position relative
          padding 11px 16px
          background #fff
          .name
            line-height 24px
            .text
              font-size 18px
              font-weight 600
              color #322e36
          .price-star
            display flex
            margin-top 8px
            .price
              flex 1
              display inline-block
              vertical-align top
              line-height 28px
            .star
              flex 1
              display inline-block
              vertical-align top
              line-height 24px
              text-align right
          .extra
            position absolute
            right 10px
            top 15px
            .share
              padding 4px
              inline-icon(16px, 16px)
              bg-img('list_icon_fengxiang')
            .favorite
              padding 4px
              inline-icon(16px, 16px)
              bg-img('list_icon_nor')
              &.favorited
                bg-img('list_icon_sel')
        .item-content
          .title
            height 38px
            line-height 38px
            padding-left 16px
            font-size 15px
            color rgb(168, 148, 185)
          .item-content-detail
            position relative
            padding 16px 18px
            background #fff
            .name
              font-size 14px
              color #818181
              margin-bottom 16px
            .detail-list
              padding-left 6px
              .detail-item
                position relative
                margin-bottom 12px
                font-size 12px
                color #231815
                &:last-child
                  margin-bottom 0
                &::before
                  position absolute
                  left -6px
                  top 0
                  content '·'
                  font-zie 12px
                  font-weight 600
                  color #231815
            .desc
              position absolute
              left 136px
              top 16px
              font-size 12px
              color #888
              &::before
                position absolute
                left -6px
                top 0
                content '·'
                font-size 12px
                font-weight 600
                color #888
        .item-ratings
          .title
            height 38px
            line-height 38px
            padding-left 16px
            font-size 15px
            color rgb(168, 148, 185)
    .foot-wrapper
      display flex
      position fixed
      left 0
      bottom 49px
      width 100%
      height 42px
      z-index 999
      border-top 1px solid rgb(217, 217, 217)
      .price
        flex 1
        padding-left 16px
        line-height 42px
        font-size 18px
        color #ff5454
      .order-btn
        flex 0 0 170px
        line-height 42px
        text-align center
        background rgb(88, 79, 96)
        &:active
          background #fff
        .label
          letter-spacing 2px
          font-size 18px
          color #fff
</style>
