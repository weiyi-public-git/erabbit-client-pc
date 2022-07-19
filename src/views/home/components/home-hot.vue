<template>
  <div class="home-hot">
    <home-panel title="人气推荐" sub-title="人气爆款 不容错过">
      <!-- 面板内容 -->
    </home-panel>
  </div>
</template>

<script>
import { ref } from 'vue'
import { findHot } from '@/api/home'
export default {
  name: 'HomeHot',
  setup () {
    const list = ref([])
    findHot().then(data => {
      list.value = data.result
    })
    return { list }
  }
}
</script>

<style lang="less" scoped>
</style>
