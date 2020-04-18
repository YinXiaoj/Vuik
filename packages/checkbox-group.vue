<template>
  <div class="vui-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VuiCheckboxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      typr: Array
    }
  }
}
</script>

<style scoped lang="scss">
.vui-checkbox-group{display: inline-block;}
</style>
