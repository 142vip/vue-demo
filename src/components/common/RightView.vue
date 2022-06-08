<template>
  <div>
    <a-layout-header style="background: #fff; padding: 0"/>
    <a-layout-content style="margin: 0 16px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>User</a-breadcrumb-item>
        <a-breadcrumb-item>Bill</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
        Bill is a cat.
      </div>
    </a-layout-content>
  </div>

</template>

<style scoped>
.right-view-div {
  background: #fff;
  margin: 10px;
  height: auto;
}

.router-view {
  margin: 5px 0px;
}
</style>
<script>

export default {
  name: 'rightView',
  data () {
    return {
      isIntroduceShow: false,
      value: 0,
      randomNum: 1
    }
  },
  components: {},
  created () {
    const { name } = this.$route
    this.isIntroduceShow = name === '/introduce'
    this.randomNum = Math.floor(Math.random() * (Math.abs(2 - 1) + 1) + 1)
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        this.isIntroduceShow = val.name === '/introduce'
        // 切换图片
        this.randomNum = Math.floor(Math.random() * (Math.abs(2 - 1) + 1) + 1)
      },
      // 深度观察监听
      deep: true
    }
  }
}
</script>
