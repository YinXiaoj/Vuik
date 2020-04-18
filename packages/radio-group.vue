<template>
  <div class="vui-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VuiRadioGroup',
  // provide 和 inject 主要在开发高阶组件和组件库时使用，用于祖孙之间的通讯
  provide () {
    return {
      RadioGroup: this // this是当前组件自己
    }
  },
  props: {
    // radiogroup收到了绑定的value值，还需要触发radio的input事件
    value: null
  }
}
</script>

<style scoped lang="scss">
.vui-radio-group{display: inline-block;}
</style>
