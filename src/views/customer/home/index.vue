<template>
  <div class="home-page">
    <div class="header-wrapper">
      <v-header></v-header>
    </div>
    <div class="tech-list-wrapper tech-list-hook">
      <ul class="tech-list-content-hook">
        <li v-for="(tech, index) in technicians" class="tech-item" @click="showDetail(index, $event)">
          <div class="avatar">
            <!-- 默认加载本地一张图片 -->
            <img width="73" height="73" :src="tech.Avatar" class="avatar-img"
                 onerror="this.src='http://localhost:9999/static/imgs/jishi-default.png'">
            <span v-show="tech.Level === 1" class="level"></span>
          </div>
          <div class="content">
            <div class="title-wrapper">
              <span class="name">{{tech.Name}}</span>
              <span class="today-about">{{tech.TodayAbout | todayAbout}}</span>
            </div>
            <div class="info-wrapper">
              <span class="age">{{tech.Age}}岁</span>
              <dot></dot>
              <span class="registar">{{tech.Registar}}</span>
              <dot v-show="tech.CERTIFICATE_IDS"></dot>
              <div class="cretificates">
                <span v-if="item" v-for="item in certificate(tech.CertificateIds)"
                      class="cretificate">{{item.CertificateName}}</span>
              </div>
            </div>
            <div class="desc-wrapper">
              <p class="text">{{tech.Experience}}</p>
            </div>
            <div class="star-wrapper">
              <star :size="36" :score="tech.Star"></star>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <transition name="fade">
      <div class="tech-wrapper" v-show="detailShow">
        <technician ref="technician"></technician>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import { mapGetters } from 'vuex'
  import { find } from '@/common/js/util'

  import vHeader from '@/components/header'
  import dot from '@/components/uiComponents/dot'
  import star from '@/components/uiComponents/star'
  import technician from '@/components/technician'

  // define how many strips of records was loaded by default
  const PAGE_SIZE = 10

  export default {
    data () {
      return {
        listHeight: 0,
        pageNow: 1
      }
    },
    mounted () {
      let payload = {
        PageNow: this.pageNow,
        PageSize: PAGE_SIZE
      }
      this.$store.dispatch('getAllTechnicians', payload)
      this.$nextTick(() => {
        this._initScroll()
      })
    },
    watch: {
      'technicians' () {
        this.$nextTick(() => {
          this._initScroll()
          this._calculateHeight()
        })
      }
    },
    computed: {
      ...mapGetters({
        isLoading: 'isLoading',
        detailShow: 'detailShow',
        technicians: 'allTechnicians'
      })
    },
    methods: {
      _initScroll () {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$el.querySelector('.tech-list-hook'), {click: true, probeType: 3})
          this.scroll.on('scroll', pos => {
            let listWindowHeight = this.$el.querySelector('.tech-list-hook').clientHeight
            if (this.listHeight + pos.y <= listWindowHeight) {
              if (this.isLoading) return // forbid send request repeatedly
              this.pageNow++
              let payload = {
                PageNow: (this.pageNow - 1) * PAGE_SIZE + 1,
                PageSize: PAGE_SIZE
              }
              this.$store.dispatch('getAllTechnicians', payload)
            }
          })
        } else {
          this.scroll.refresh()
        }
      },
      _calculateHeight () {
        let scrollList = this.$el.querySelector('.tech-list-content-hook')
        this.listHeight = scrollList.clientHeight
      },
      showDetail (index, event) {
        if (!event._constructed) return
        let selectedTech = this.technicians[index]
        this.$store.commit('SELECT_TECHNICIAN', {selectedTech})
        this.$refs.technician.showDetail()
      },
      certificate (arr) {
        let certificateConfig = this.staticConfig.techCertificate
        let resArr = []
        arr.forEach((item, index) => {
          let res = find(certificateConfig, _item => _item.CertificateId === item)
          resArr.push(res)
        })
        return resArr
      }
    },
    filters: {
      todayAbout (num) {
        return num === 0 ? '可约' : '不可约'
      }
    },
    components: {
      'v-header': vHeader,
      dot,
      star,
      technician
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixin.styl"

  .home-page
    .tech-list-wrapper
      position absolute
      left 0
      top 188px
      bottom 49px
      width 100%
      overflow hidden
      .tech-item
        display flex
        padding 11px 15px
        border-bottom 1px solid #f1f1f1
        &:last-child
          border-bottom none
        .avatar
          flex 0 0 103px
          position relative
          .avatar-img
            width 73px
            height 73px
            border-radius 50%
          .level
            display inline-block
            position absolute
            left 10px
            bottom 2px
            width 51px
            height 14px
            bg-img('level')
            background-size contain
        .content
          flex 1
          position relative
          .title-wrapper
            margin-bottom 16px
            .name
              margin-right 10px
              font-size 15px
              color #29292E
            .today-about
              display inline-block
              width 50px
              height 15px
              line-height 15px
              text-align center
              padding 2px
              border-radius 10px
              font-size 10px
              color #fff
              background rgb(88, 79, 96)
          .info-wrapper
            margin-bottom 16px
            font-size 12px
            color #555
            .cretificates
              display inline-block
              vertical-align top
          .desc-wrapper
            width 100%
            margin-bottom 16px
            font-size 11px
            color #919191
          .star-wrapper
            position absolute
            right 0
            top 30px
    .tech-wrapper
      position fixed
      left 0
      top 0
      bottom 0
      width 100%
      z-index 20
      transform translate3d(0, 0, 0)
      &.fade-enter-active, &.fade-leave-active
        transition all .4s ease
      &.fade-enter, &.fade-leave-active
        opacity 0
        transform translate3d(100%, 0, 0)
</style>
