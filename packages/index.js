// 整个包的入口
// 定义install方法，接受Vue作为参数，如果使用Vue注册插件，则所有的组件都将注册
// 这样，调用Vue.use(vuik)方法时，会自动执行install
import VuiButton from './button.vue'
import VuiDialog from './dialog.vue'
import VuiInput from './input.vue'
import VuiSwitch from './switch.vue'
import VuiRadio from './radio.vue'
import VuiRadioGroup from './radio-group.vue'
import VuiCheckbox from './checkbox.vue'
import VuiCheckboxGroup from './checkbox-group.vue'
import VuiFormItem from './form-item.vue'
import VuiForm from './form.vue'
const components = [VuiButton, VuiDialog, VuiInput, VuiSwitch, VuiRadio, VuiRadioGroup, VuiCheckbox, VuiCheckboxGroup, VuiFormItem, VuiForm]
const install = function (Vue) {
  // 全局注册所有组件
  components.forEach((item) => {
    Vue.component(item.name, item)
  })
}
// 检测到Vue是可以访问的全局变量时，直接执行install，把插件引入，不用再调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// 导出install方法
export default {
  install
}
