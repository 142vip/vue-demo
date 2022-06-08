<template>
  <div>
    <img
      v-if="isIntroduceShow&&randomNum===1"
      alt=""
      height="100%"
      src="@/assets/images/oauth2_introduce_001.png"
      srcset=""
      width="100%"
    >
    <img
      v-if="isIntroduceShow&&randomNum===2"
      alt=""
      height="100%"
      src="@/assets/images/oauth2_introduce_002.png"
      srcset=""
      width="100%"
    >

    <Card
      v-if="!isIntroduceShow"
      :bordered="false"
      class="right-view-div"
    >
      <!-- 面包屑 -->
      <Breader></Breader>
      <router-view class="router-view"></router-view>
    </Card>
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
