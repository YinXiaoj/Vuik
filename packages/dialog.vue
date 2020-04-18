<template>
  <!-- transition包裹元素时，会自动添加一些动画 -->
  <transition name="dialog-fade">
  <!--  self表示只有点击自己才触发，冒泡事件  -->
  <div class="vui-dialog-wrapper" v-show="visible" @click.self="handleClose">
    <div class="vui-dialog" :style="{width: width, top: top}">
      <div class="vui-dialog-header">
        <!-- 带名字的插槽，不传插槽，默认显示span -->
        <slot name="title">
          <span class="vui-dialog-title">{{title}}</span>
        </slot>
        <button class="vui-dialog-headerbtn" @click="handleClose">×</button>
      </div>
      <div class="vui-dialog-body">
        <!--  默认插槽  -->
        <slot></slot>
      </div>
      <!--  如果footer插槽没内容，底部不显示  -->
      <div class="vui-dialog-footer" v-if="$slots.footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'vuiDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh' // 类似于15%
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false) // 触发父组件的事件，更新visible,配合sync
    }
  }
}
</script>

<style scoped lang="scss">
.vui-dialog-wrapper{position:fixed; top:0px; right:0px; bottom:0px; left:0px; overflow:auto; background: rgba(0,0,0,0.5);}
.vui-dialog{position:relative; margin:0 auto 50px; background:#fff; border-radius:2px; box-shadow:0px 1px 3px rgba(0,0,0,0.3); box-sizing:border-box; width:50%;}
.vui-dialog-header{padding:20px 20px 10px;}
.vui-dialog-title{line-height:24px; font-size:18px; color:#303133;}
.vui-dialog-headerbtn{position:absolute; top:20px; right:20px; padding:0; background:transparent; border:none; outline:none; cursor:pointer; font-size:16px;}
.vui-dialog-body{padding:30px 20px; color:#606266; font-size:14px; word-break:break-all;}
.vui-dialog-footer{padding:10px 20px 20px; text-align:right; box-sizing:border-box;}
::v-deep .vui-dialog-footer .vui-button{margin-left:10px;}
/* ::v-deep是深度选择器，scoped作用与当前组件，无法覆盖其他组件样式，深度选择器可以作用的更深 */
@keyframes run {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.dialog-fade-enter-active { animation: run 0.5s;}
.dialog-fade-leave-active { animation: run 0.5s reverse;}
</style>
