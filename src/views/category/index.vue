<template>
  <div class="top-category">
    <div class="container">
      <!-- 面包屑 -->
      <XtxBread>
        <XtxBreadItem :to="{path:'/'}">首页</XtxBreadItem>
        <XtxBreadItem to="/category/1005000">电器</XtxBreadItem>
        <XtxBreadItem >空调</XtxBreadItem>
      </XtxBread>
      <!-- 轮播图 -->
      <!-- 全部分类 -->
      <!-- 各个分类推荐商品 -->
    </div>
  </div>
</template>

<script>
import xtxBreadItem from '@/components/library/xtx-bread-item.vue'
export default {
  components: { xtxBreadItem },
  name: 'TopCategory'
}
</script>

<style lang="less" scoped>

</style>
