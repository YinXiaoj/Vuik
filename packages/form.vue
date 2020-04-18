<template>
  <div class="vui-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VuiForm',
  props: {
    model: {
      type: Object,
      required: true // 必须传值
    },
    labelWidth: {
      type: String,
      default: '60px'
    }
  },
  provide () {
    return {
      Form: this
    }
  }
}
</script>

<style scoped lang="scss">

</style>
