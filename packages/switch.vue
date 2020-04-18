<template>
  <div class="vui-switch" @click="handleActive" :class="{'is-checked': value}">
    <!-- ref控制dom  -->
    <span class="vui-switch-core" ref="core">
      <span class="vui-switch-button"></span>
    </span>
    <!-- 一个隐藏的checkbox,放置name属性,便于用户操作 -->
    <input type="checkbox" :name="name" class="vui-switch-input" ref="input"/>
  </div>
</template>

<script>
export default {
  name: 'vuiSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    async handleActive () {
      this.$emit('input', !this.value)
      // 等待dom更新，父组件的value值发生改变，再设置颜色
      await this.$nextTick()
      this.setColor()
    },
    setColor () {
      // 修改开关颜色
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  mounted () { // 初始化时执行
    this.setColor()
    this.$refs.input.checked = this.value // 使input的值和选择的值是同步的
  }
}
</script>

<style scoped lang="scss">
.vui-switch-core{margin:0;display:inline-block;position:relative;width:40px;height:20px;border:1px solid #dcdfe6;outline:none;border-radius:10px;box-sizing:border-box;background:#dcdfe6;cursor:pointer;transition:border-color .3s,background-color .3s;vertical-align:middle;}
.vui-switch-core::after{content:"";position:absolute;top:1px;left:1px;border-radius:100%;transition:all .3s;width:16px;height:16px;background-color:#fff;}
.vui-switch.is-checked .vui-switch-core::after{left:100%;margin-left:-17px;}
.vui-switch-input{position:absolute;width:0px;height:0px;opacity:0;margin:0;}
</style>
