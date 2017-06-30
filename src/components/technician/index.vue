<template>
  <div class="technician-page">
    <div class="technician-info">
      <div class="header-wrapper">
        <h1 class="title">技师详情</h1>
        <div class="back" @click="closeDetail">
          <x-icon type="ios-arrow-back" size="30"></x-icon>
        </div>
      </div>
      <div class="info-wrapper">
        <div class="info">
          <div class="info-left">
            <img class="avatar" width="73" height="73" :src="technicianInfo.Avatar"
                 onerror="this.src='http://localhost:9999/static/imgs/jishi-default.png'">
          </div>
          <div class="info-right">
            <div class="name-wrapper">
              <span class="name">{{technicianInfo.Name}}</span>
            </div>
            <div class="sim-info-wrapper">
              <span class="sex">{{technicianInfo.Sex | sexFormat}}</span>
              <dot></dot>
              <span class="age">{{technicianInfo.Age}}岁</span>
              <dot></dot>
              <span class="registar">{{technicianInfo.Registar}}</span>
            </div>
            <div class="certificate">
              <span class="certificate-item"
                    v-if="item"
                    v-for="item in formatCertification(technicianInfo.CertificateIds)">{{item}}</span>
            </div>
          </div>
          <!-- 额外功能：收藏与分享 -->
          <div class="extra">
            <div class="share" @click="share">
              <span class="icon"></span>
            </div>
            <div class="favorite" @click="toggleFavorite">
              <span class="icon" :class="{active: isFavorite}"></span>
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
        <ul class="service-list">
          <li class="service-item" v-for="service in services">
            <span class="title">{{service.name}}</span>
            <span class="price"><span class="red">&yen;{{service.price}}</span>/{{service.time}}分钟</span>
            <span class="subscribe" @click="subscribe">预约</span>
          </li>
        </ul>
      </div>
      <div class="ratings">
        <h2 class="title">客户评价</h2>
        <div class="ratings-select">
          <span class="text">全部</span>
          <span class="count" v-show="ratings">({{ratingsCount}})</span>
        </div>
        <div class="ratings-list">
          <li v-for="rating in ratings" class="rating-item">
            <div class="star-wrapper">
              <star :size="36" :score="rating.CommentsStar"></star>
            </div>
            <p class="content">{{rating.CommentsContent}}</p>
            <div class="extra">
              <span class="tel">{{rating.CustomerTel}}</span>
              <span class="time">{{rating.Createtime | formatTime}}</span>
            </div>
          </li>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="subscribe-wrapper" v-if="subscribeShow">
        <subscribe></subscribe>
      </div>
    </transition>
    <div class="technician-mask"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  import { find } from '@/common/js/util'
  import BScroll from 'better-scroll'
  import { formatDate } from '@/common/js/date'
  import subscribe from '@/components/subscribe'
  import dot from '@/components/uiComponents/dot'
  import star from '@/components/uiComponents/star'

  let services = [
    {
      name: '精油SPA (卧)',
      price: 168,
      time: 90
    },
    {
      name: '精油SPA (卧)',
      price: 128,
      time: 60
    },
    {
      name: '精油SPA (卧)',
      price: 288,
      time: 120
    }
  ]
  export default{
    data () {
      return {
        favorite: false,
        services: [],
        ratings: []
      }
    },
    mounted () {},
    computed: {
      ...mapGetters({
        technicianInfo: 'selectedTechnician',
        subscribeShow: 'subscribeShow'
      }),
      isFavorite () {
        return this.loadFromLocal(this.technicianInfo.TechnicianId, 'favorite', this.favorite)
      },
      ratingsCount () {
        if (!this.ratings) return
        return this.ratings.length
      }
    },
    watch: {
      'technicianInfo' () {
        this.favorite = this.technicianInfo.IfCollect || false
        this.ratings = this.technicianInfo.Commentslist
        this.$nextTick(() => {
          this._initScroll()
        })
      }
    },
    methods: {
      _initScroll () {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$el, {click: true, probeType: 3})
          this.scroll.on('scroll', pos => {
//            console.log('x:' + pos.x, 'y:' + pos.y)
          })
        } else {
          this.scroll.refresh()
        }
      },
      showDetail () {
        this.services = services
        this.$store.commit('TOGGLE_TECH_DETAIL')
        let payload = {
          TechnicianId: this.technicianInfo.TechnicianId,
          PageNow: 1,
          PageSize: 10
        }
        this.$store.dispatch('getTechnicians', payload)
      },
      closeDetail (event) {
        if (!event._constructed) return
        this.$store.commit('TOGGLE_TECH_DETAIL')
      },
      share (event) {
        if (!event._constructed) return
        console.log('share')
      },
      toggleFavorite (event) {
        if (!event._constructed) return
        this.favorite = !this.favorite
        this.saveToLocal(this.technicianInfo.TechnicianId, 'favorite', this.favorite)
        let postData = {
          Type: 0,
          TechnicianId: this.technicianInfo.TechnicianId
        }
        if (this.favorite) {
          this.$store.dispatch('addFavorite', postData)
        } else {
          this.$store.dispatch('cancelFavorite', postData)
        }
      },
      subscribe (event) {
        if (!event._constructed) return
        this.$store.commit('TOGGLE_SUBSCRIBE')
//        if (this.$refs.subscribe) {
//          this.$refs.subscribe.showSubscribe()
//        }
      },
      formatCertification (arr) {
        if (!Array.isArray(arr)) return
        let techCertificate = this.staticConfig.techCertificate
        let resArr = []
        arr.forEach((item, index) => {
          let _resItem = find(techCertificate, _item => _item.CertificateId === item)
          resArr.push(_resItem.CertificateName)
        })
        return resArr
      }
    },
    filters: {
      sexFormat (num) {
        return num === 0 ? '男' : '女'
      },
      contFormat (str) {
        if (str && str.length > 100) {
          return str.substr(0, 100) + '...'
        }
        return str
      },
      formatTime (timeStamp) {
        timeStamp = timeStamp * 1
        return formatDate(new Date(timeStamp), 'yyyy-MM-dd hh:mm')
      }
    },
    components: {
      subscribe,
      dot,
      star
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .technician-page
    width 100%
    height 100%
    overflow hidden
    .technician-info
      width 100%
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
          top 3px
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
              .certificate-item
                display inline-block
                width 70px
                height 26px
                margin-right 4px
                text-align center
                color #56b7d2
                border 2px solid #56b7d2
                box-sizing border-box
                border-radius 6px
                line-height 22px
                font-size 11px
                &:last-child
                  margin-right 0
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
                &.active
                  bg-img('list_icon_sel')
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
      .services
        & > .title
          height 36px
          line-height 36px
          padding 11px 16px
          font-size 15px
          color #a894b9
          background rgb(241, 241, 241)
        .service-item
          display flex
          justify-content space-between
          height 42px
          line-height 42px
          padding 14px 16px
          font-size 0
          borderB-1px(rgb(241, 241, 241))
          .title, .price, .subscribe
            flex 1
            display inline-block
            vertical-align top
            font-size 14px
            color #242328
          .price
            .red
              color rgb(232, 94, 94)
          .subscribe
            flex 0 0 54px
            width 54px
            height 27px
            line-height 27px
            text-align center
            margin auto 0
            border 1px solid rgb(232, 94, 94)
            border-radius 4px
      .ratings
        & > .title
          height 36px
          line-height 36px
          padding 11px 16px
          font-size 15px
          color #a894b9
          background rgb(241, 241, 241)
        .ratings-select
          height 36px
          line-height 36px
          padding 0 16px
          font-size 12px
          color #584f60
          borderB-1px(rgb(241, 241, 241))
        .ratings-list
          .rating-item
            padding 11px 16px
            .star-wrapper
              margin-bottom 8px
            .content
              width 100%
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              margin-bottom 8px
              font-size 14px
              color #242328
            .extra
              display flex
              font-size 10px
              color #8e8e8e
              .tel
                flex 1
              .time
                flex 1
                text-align right
    .subscribe-wrapper
      position fixed
      left 0
      top 0
      width 100%
      height 100%
      background #f1f1f1
      transform translate3d(0, 0, 0)
      &.fade-enter-active, &.fade-leave-active
        transition all .4s ease
      &.fade-enter, &.fade-leave-active
        opacity 0
        transform translate3d(100%, 0, 0)
    .technician-mask
      position fixed
      top 0
      left 0
      width 100%
      height 100%
      background #fff
      z-index -1
</style>
