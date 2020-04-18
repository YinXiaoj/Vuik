<template>
  <div class="vui-form-item">
    <label class="vui-form-item-label" :style="{width: this.Form.labelWidth}">{{label}}</label>
    <div class="vui-form-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VuiFormItem',
  inject: {
    Form: {}
  },
  props: {
    label: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.vui-form-item{margin-bottom:20px}
.vui-form-item-label{text-align:right;vertical-align:middle;float:left;font-size:14px;color:#606266;line-height:40px;padding:0 12px 0 0;box-sizing:border-box;}
.vui-form-item-content{line-height:40px;position:relative;font-size:14px; overflow: hidden;}
.vui-form-item::after,.vui-form-item-content::after{display:table;content:""; clear: both;}
</style>
