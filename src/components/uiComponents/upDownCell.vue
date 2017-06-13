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
      :title="text.text5"
      is-link
      :border-intent="false"
      :arrow-direction="showContent ? 'up' : 'down'"
      @click.native="showContent"></cell>

    <div class="sub-item-wrapper sub-item-hook" v-show="showContent">
      <div class="sub-item-content">
        <li v-for="item in content" class="sub-item">{{item}}</li>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
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
          return ['content001', 'content002', 'content001', 'content001']
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
      }
    },
    components: {
      CellBox
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
