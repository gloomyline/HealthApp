<template>
  <div class="technician-info">
    <div class="header-wrapper">
      <h1 class="title">技师详情</h1>
      <div class="back" @click="closeDetail">
        <span class="icon-back">返回</span>
      </div>
    </div>
    <div class="info-wrapper">
      <div class="info">
        <div class="info-left">
          <img class="avatar" width="73" height="73" :src="technicianInfo.AVATAR"
               onerror="this.src='http://192.168.1.128:9999/static/imgs/jishi-default.png'">
        </div>
        <div class="info-right">
          <div class="name-wrapper">
            <span class="name">{{technicianInfo.NAME}}</span>
          </div>
          <div class="sim-info-wrapper">
            <span class="sex">{{technicianInfo.SEX | sexFormat}}</span>
            <dot></dot>
            <span class="age">{{technicianInfo.AGE}}岁</span>
            <dot></dot>
            <span class="registar">{{technicianInfo.REGISTAR}}</span>
          </div>
          <div class="certificate">
            <span class="name">高级推拿师</span>
          </div>
        </div>
        <div class="extra">
          <div class="share" @click="share">
            <span class="icon"></span>
          </div>
          <div class="favorite" @click="toggleFavorite">
            <span class="icon"></span>
          </div>
        </div>
      </div>
      <div class="desc" v-show="technicianInfo.SERVE_CONTENT">
        <p class="text">
          {{technicianInfo.SERVE_CONTENT | contFormat}}
        </p>
      </div>
    </div>
    <div class="services">
      <h2 class="title">服务项目</h2>
      <div class="service-item">
        <span class="title"></span>
        <span class="price"></span>
        <span class="subscribe"></span>
      </div>
      <div class="service-item">
        <span class="title"></span>
        <span class="price"></span>
        <span class="subscribe"></span>
      </div>
      <div class="service-item">
        <span class="title"></span>
        <span class="price"></span>
        <span class="subscribe"></span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  import dot from '@/components/uiComponents/dot'
  export default{
    computed: {
      ...mapGetters({
        technicianInfo: 'selectedTechnician'
      })
    },
    watch: {},
    methods: {
      closeDetail () {
        this.$store.commit('TOGGLE_TECH_DETAIL')
      },
      share () {
        console.log('share')
      },
      toggleFavorite () {
        console.log('add-favorite')
      }
    },
    filters: {
      sexFormat (num) {
        return num === 0 ? '男' : '女'
      },
      contFormat (str) {
        if (str.length > 100) {
          return str.substr(0, 100) + '...'
        }
        return str
      }
    },
    components: {
      dot
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .technician-info
    width 100%
    height 100%
    background #fff
    color #fff
    .header-wrapper
      position relative
      height 41px
      text-align center
      background rgb(88, 79, 96)
      .title
        line-height 41px
        font-size 18px
      .back
        position absolute
        left 12px
        top 10px
        padding 4px
        .icon-back
          display inline-block
    .info-wrapper
      .info
        display flex
        position relative
        padding 22px 16px
        borderB-1px(#f1f1f1)
        .info-left
          flex 0 0 109px
          margin-right 20px
        .info-right
          flex 1
          .name-wrapper
            line-height 15px
            font-size 15px
            color #29292e
            margin-bottom 11px
          .sim-info-wrapper
            margin-bottom 10px
            line-height 12px
            height 12px
            font-size 0
            color #b5a6c3
            .age, .sex, .registar
              display inline-block
              vertical-align top
              margin-right 2px
              font-size 12px
            .dot
              margin 5px 2px 0 0
          .certificate
            width 70px
            height 26px
            text-align center
            color #56b7d2
            border 2px solid #56b7d2
            box-sizing border-box
            border-radius 6px
            .name
              line-height 22px
              font-size 11px
        .extra
          position absolute
          top 18px
          right 12px
          font-size 0
          .share
            display inline-block
            vertical-align top
            padding 4px
            margin-right 10px
            .icon
              inline-icon(16px, 16px)
              bg-img('list_icon_fengxiang')
          .favorite
            display inline-block
            vertical-align top
            padding 4px
            .icon
              inline-icon(16px, 16px)
              bg-img('list_icon_nor')
      .desc
        padding 12px 18px
        border-bottom 1px solid #f1f1f1
        .text
          height 48px
          line-height 16px
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          font-size 10px
          color #8e8e8e
</style>
