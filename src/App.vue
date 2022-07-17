<template>
  <!-- vue2.0需要根元素,vue3.0可以是代码片段 Fragment -->
  <div class="container">
    <!-- 修改数据,测试是否持久化 -->
    App {{$store.state.user.profile.account}}
    <button @click="$store.commit('user/setUser',{account: 'zhuchaunjie'})">设置用户信息</button>
  </div>
</template>

<script>
export default {
  // 使用vuex仓库
  name: 'App',
  components: {
  },
  setup () {

  }
}
</script>

<style>

</style>
