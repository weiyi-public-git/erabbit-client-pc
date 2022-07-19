
<script>
// 使用render函数，需要去掉template
export default {
  name: 'XtxBread'
}
</script>

<style lang='less'>
// 去除 scoped 属性， 目的：让样式作用到xtx-bread-item组件
.xtx-bread{
  display: flex;
  padding: 25px 10px;
  &-item {
    a {
      color: #666;
      transition: all .4s;
      &:hover {
        color: @xtxColor;
      }
    }
  }
  i {
    font-size: 12px;
    margin-left: 5px;
    margin-right: 5px;
    line-height: 22px;
    &:last-child {
        display: none;
    }
  }
}
</style>
