<template>
  <div class="bind-phone" v-show="phoneBindingShow">
    <title-wrapper :title="phoneBindingTitle" @close-page="closePhoneBinding"></title-wrapper>
    <group>
      <x-input class="mobile" title="手机号码" name="mobile" placeholder="请输入手机号码" is-type="china-mobile" required
               v-model="mobile"></x-input>
      <x-input class="captcha" title="验证码" name="captcha" placeholder="请输入验证码" v-model="captcha">
        <x-button class="fetch-btn" slot="right" type="primary" mini v-if="!captchaFetched"
                  @click.native="fetchCaptcha">获取验证码
        </x-button>
        <x-button class="fetched-tip" slot="right" type="warn" mini v-else>{{timer}}s后重新获取</x-button>
      </x-input>
      <div class="btn-container">
        <x-button class="bind-btn" type="primary" mini @click.native="bindMobile">确认绑定</x-button>
      </div>
    </group>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  import { Group, Cell, XInput, XButton } from 'vux'
  import titleWrapper from '@/components/uiComponents/titleWrapper'

  // 获取验证码时间间隔
  const Timer = 60

  export default{
    data () {
      return {
        mobile: '',
        timer: 0,
        captcha: '',
        captchaFetched: false
      }
    },
    computed: {
      ...mapGetters({
        phoneBindingShow: 'phoneBindingShow',
        userInfo: 'userInfo'
      }),
      phoneBindingTitle () {
        return this.userInfo.Customerinfo.Tel.replace(/\s+/, '') !== '' ? '解绑手机' : '绑定手机'
      }
    },
    methods: {
      _startTimer () {
        this.timer = Timer
        setInterval(() => {
          this.timer--
          if (this.timer <= 0) {
            this.captchaFetched = false
          }
        }, 1000)
      },
      fetchCaptcha () {
        // Timer 时间内不再重复请求数据
        if (!this.captchaFetched) return
        this.captchaFetched = true
        this._startTimer()
      },
      bindMobile () {
        // local validate
        let payload = {
          userPhone: this.mobile,
          authCode: this.captcha,
          openId: this.userInfo.Customerinfo.Openid
        }
        this.$store.dispatch('bindMobile', payload)
      },
      closePhoneBinding () {
        this.$store.commit('CLOSE_PHONE_BINDING')
      }
    },
    components: {
      Group,
      Cell,
      XInput,
      XButton,
      titleWrapper
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .bind-phone
    position: fixed
    top 0
    left 0
    bottom 0
    width 100%
    height 100%
    background #fff
    .weui-btn_primary
      background-color rgb(88, 79, 96)
    .captcha
      .weui-btn_warn
        background-color rgb(55, 55, 55)
    .btn-container
      margin-top 30px
      text-align center
</style>
