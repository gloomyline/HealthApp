<template>
  <div class="up-down-cell">
    <cell-box
      v-if="cellType === 0"
      class="title"
      is-link
      :border-intent="false"
      :arrow-direction="showContent ? 'up' : 'down'"
      @click.native="toggleCont">
      <span class="num">{{title.num}}</span>
      <span class="text">{{title.text}}</span>
    </cell-box>
    <cell
      v-else
      class="title"
      is-link
      :border-intent="false"
      :arrow-direction="showContent ? 'up' : 'down'"
      @click.native="showContent">
      <span class="text">{{title.text}}</span>
    </cell>
    <transition name="move">
      <div class="sub-item-wrapper sub-item-hook" v-show="showContent">
        <div class="sub-item-content">
          <li v-for="item in content" class="sub-item">{{item}}</li>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import { CellBox } from 'vux'
  export default{
    props: {
      cellType: {
        type: Number,
        default: 0
      },
      title: {
        type: Object,
        default () {
          return {
            num: 0,
            text: 'text'
          }
        }
      },
      content: {
        type: Array,
        default () {
          return ['content001', 'content001', 'content001', 'content001', 'content001', ' content001', 'content001']
        }
      }
    },
    data () {
      return {
        showContent: false
      }
    },
    methods: {
      toggleCont () {
        this.showContent = !this.showContent
        if (this.showContent) {
          this.$nextTick(() => {
            this._initScroll()
          })
        }
      },
      _initScroll () {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$el.querySelector('.sub-item-hook'), {click: true})
        } else {
          this.scroll.refresh()
        }
      }
    },
    components: {
      CellBox
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl'
  .up-down-cell
    border-top 1px solid #f1f1f1

  /*.sub-item-wrapper
    transform translate3d(0, 0, 0)
    &.move-enter-active, &.move-leave-active
      transition all .5s linear
    &.move-enter, &.move-leave-active
      opacity 0
      transform translate3d(0, -100%, 0)*/

</style>
