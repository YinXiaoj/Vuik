<template>
  <button class="vui-button" :class="[`vui-button-${type}`,{
    'plain': plain,
    'round': round,
    'disabled': disabled
  }]" @click='handleClick' :disabled='disabled'>
      <i v-if='icon' :class="`vui-icon ${icon}`"></i>
      <!-- 如果不传插槽，span不显示 -->
      <span v-if='$slots.default'><slot></slot></span>
  </button>
</template>
<script>
export default {
  name: 'vuiButton',
  // props: ['type'],
  // props接受参数，校验数据类型：字符串
  props: {
    type: {
      type: String,
      default: 'default' // 默认值
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (e) {
      // 子组件触发父组件的事件
      this.$emit('click', e)
    }
  }
}
</script>
<style lang="scss" scoped>
.vui-button{display: inline-block; white-space: nowrap; background: #fff; cursor: pointer; line-height: 1; border: 1px solid #dcdfe6; color: #606266; appearance: none; -webkit-appearance: none; text-align: center; box-sizing: border-box; outline: none; transition: 0.1s; font-weight: 500; font-size: 14px; padding: 12px 20px; border-radius: 4px;}
.vui-button:hover,.vui-button:focus{color: #409eff; border-color: #c6e2ff; background-color: #ecf5ff;}
.vui-button-primary{background: #409eff; color: #fff; border-color: #409eff;}
.vui-button-success{background: #67c23a; color: #fff; border-color: #67c23a;}
.vui-button-info{background: #909399; color: #fff; border-color: #909399;}
.vui-button-warning{background: #e6a23c; color: #fff; border-color: #e6a23c;}
.vui-button-danger{background: #f56c6c; color: #fff; border-color: #f56c6c;}
.vui-button.plain{}
.vui-button-primary.plain{background: #40cfff; color: #fff; border-color: #40cfff;}
.vui-button.round{border-radius: 20px;}
.vui-button.disabled,.vui-button.disabled:hover,.vui-button.disabled:focus{color:#c0c4cc;;;background: #fff;border: 1px solid #dcdfe6;}
</style>
