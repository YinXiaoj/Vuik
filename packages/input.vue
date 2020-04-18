<template>
  <div class="vui-input" :class="{'vui-input-suffix': showSuffix}">
    <!--  如果传了showPassword就判断密码是否切换显示，如果不传，就不判断，直接取type值 -->
    <input
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :class="['vui-input-inner',{'is-disabled': disabled}]"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
    />
    <span class="vui-input-suffix" v-if="showSuffix">
      <i class="vui-input-icon" v-if="clearable && value" @click="clear">x</i>
      <i class="vui-input-icon" v-if="showPassword && value" @click="handlePassword">eye</i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'vuiInput',
  data () {
    return {
      passwordVisible: false // 用于控制是否切换显示密码
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () { // 清空value
      this.$emit('input', '')
    },
    handlePassword () { // 密码切换显示
      this.passwordVisible = !this.passwordVisible
    }
  },
  computed: {
    showSuffix () { // 判断是否有小图标
      return this.clearable || this.showPassword
    }
  }
}
</script>

<style scoped lang="scss">
.vui-input-inner{-webkit-appearance:none;background-color:#fff;background-image:none;border-radius:4px;border:1px solid #dcdfe6;box-sizing:border-box;color:#606266;display:inline-block;font-size:inherit;height:40px;line-height:40px;outline:none;padding:0 15px;transition:border-color .2s cubic-bezier(.645,.045,.355,1);width:100%;}
.vui-input-inner:focus{outline:none;border-color:#409eff;}
.vui-input-inner:hover{outline:none;border-color:#ccc;}
.vui-input-inner.is-disabled{background-color:#f5f7fa;border-color:#e4e7ed;color:#c0c4cc;cursor:not-allowed;}
.vui-input-suffix{position: relative;}
.vui-input-suffix i{position:absolute; right:10px; top:2px; cursor: pointer;}
</style>
