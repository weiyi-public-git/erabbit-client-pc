<template>
    <div class="xtx-bread-item">
      <RouterLink v-if="to" :to="to"><slot /></RouterLink>
      <span v-else><slot /></span>
    </div>
    <i class="iconfont icon-angle-right"></i>
</template>

<script>
export default {
  name: 'XtxBreadItem',
  props: {
    // 父级类目路径
    to: {
      type: [String, Object],
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>

</style>
