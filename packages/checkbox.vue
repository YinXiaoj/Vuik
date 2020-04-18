<template>
  <div class="vui-checkbox" :class="{'is-checked' : isChecked}">
    <span class="vui-checkbox-input">
      <span class="vui-checkbox-inner"></span>
      <input
        type="checkbox"
        class="vui-checkbox-original"
        :name="name"
        v-model="model"
        :value="label"
      />
    </span>
    <span class="vui-checkbox-label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </div>
</template>

<script>
export default {
  name: 'VuiCheckbox',
  computed: {
    model: {
      get () {
        return this.isGroup ? this.CheckboxGroup.value : this.value
      },
      set (value) {
        this.isGroup ? this.CheckboxGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup () {
      return !!this.CheckboxGroup
    },
    isChecked () { // 判断选中状态的class
      // 如果在group中，model是一个数组，判断label时候在model中
      // 如果不在group中，直接使用model
      return this.isGroup ? this.model.includes(this.label) : this.model
    }
  },
  inject: {
    CheckboxGroup: {
      default: ''
    }
  },
  props: {
    value: null,
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.vui-checkbox{color:#606266;font-weight:500;line-height:1;position:relative;cursor:pointer;display:inline-block;white-space:nowrap;outline:none;font-size:14px;margin-right:30px;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;}
.vui-checkbox-input{white-space:nowrap;cursor:pointer;outline:none;display:inline-block;line-height:1;position:relative;vertical-align:middle; }
.vui-checkbox-inner{border:1px solid #dcdfe6;width:14px;height:14px;background-color:#fff;position:relative;cursor:pointer;display:inline-block;box-sizing:border-box;}
.vui-checkbox-original{opacity:0;outline:none;position:absolute;top:0px;left:0px;right:0px;bottom:0px;margin:0;}
.vui-checkbox-label{font-size:14px;padding-left:10px;}
.vui-checkbox.is-checked .vui-checkbox-inner{border-color:#409eff;background:#409eff;}
</style>
