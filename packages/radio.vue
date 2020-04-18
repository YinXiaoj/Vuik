<template>
  <!-- 判断它自己的label是否等于父组件传来的vaule值 -->
  <div class="vui-radio" :class="{'is-checked': label === model}">
    <span class="vui-radio-input">
      <span class="vui-radio-inner"></span>
      <input
        type="radio"
        class="vui-radio-original"
        :value="label"
        :name="name"
        v-model="model"
      />
    </span>
    <span class="vui-radio-label">
      <slot></slot>
      <!-- 如果不传内容，就显示label -->
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </div>
</template>

<script>
export default {
  name: 'VuiRadio',
  // value是父组件传的值，不能双向绑定，需要一个自己的计算属性model
  computed: {
    model: {
      get () {
        // 判断如果是group包裹的就返回RadioGroup的value，否则返回自己的value
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (value) {
        // 触发父组件的input事件，修改父组件v-model的值
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup () { // 判断是否被group包裹
      return !!this.RadioGroup // !!改成布尔值
    }
  },
  inject: { // 类似于高阶版的props，接受更高层的父组件传值
    RadioGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null, // 要得到的值是label，所以value不做校验
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.vui-radio{color:#606266;font-weight:500;line-height:1;position:relative;cursor:pointer;display:inline-block;white-space:nowrap;outline:none;font-size:14px;margin-right:30px;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;}
.vui-radio-input{white-space:nowrap;cursor:pointer;outline:none;display:inline-block;line-height:1;position:relative;vertical-align:middle; }
.vui-radio-inner{border:1px solid #dcdfe6;border-radius:100%;width:14px;height:14px;background-color:#fff;position:relative;cursor:pointer;display:inline-block;box-sizing:border-box;}
.vui-radio-original{opacity:0;outline:none;position:absolute;top:0px;left:0px;right:0px;bottom:0px;margin:0;}
.vui-radio-label{font-size:14px;padding-left:10px;}
.vui-radio.is-checked .vui-radio-inner{border-color:#409eff;background:#409eff;}
</style>
