<template>
  <div class="home-page">
    <div class="tech-list-wrapper tech-list-hook">
      <ul>
        <li v-for="(tech, index) in techList" class="tech-item">
          <div class="avatar">
            <img width="73" height="73" :src="tech.AVATAR">
          </div>
          <div class="content">
            <div class="title-wrapper">
              <span class="name">{{tech.NAME}}</span>
              <span class="tody-about">{{tech.TODAY_ABOUT}}</span>
            </div>
            <div class="info-wrapper">
              <span class="age">{{tech.AGE}}</span>
              <dot></dot>
              <span class="registar">{{tech.REGISTAR}}</span>
              <dot v-show="tech.CERTIFICATE_IDS"></dot>
              <span class="cretificate">高级推拿师</span>
            </div>
            <div class="desc-wrapper">
              <p class="text">{{tech.SERVE_CONTENT}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import dot from '@/components/uiComponents/dot'

  export default {
    props: {
      techList: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components: {
      dot
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home-page
    position absolute
    left 0
    top 188px
    width 100%
    padding-bottom 49px
    overflow hidden
    .tech-list-wrapper
      .tech-item
        display flex
      .avatar
        flex 0 0 103px
      .content
        flex 1
</style>
