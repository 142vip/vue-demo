<template>
  <div class="home-div">
    <Header :username="newName"/>
    <div class="flex-div">
      <LeftSideMenu class="flex-com"/>
      <RightView class="flex-com"/>
    </div>
    <Footer/>
    <!--  回到顶部 -->
    <BackTop
      :bottom="50"
      :height="100"
    >
    </BackTop>
  </div>
</template>
<script>
import Header from '../components/common/Header'
import LeftSideMenu from '../components/common/LeftSideMenu'
import RightView from '../components/common/RightView'
import Footer from '../components/common/Footer'

export default {
  data () {
    return {
      newName: ''
    }
  },
  components: {
    Header,
    LeftSideMenu,
    RightView,
    Footer
  },
  methods: {}
}
</script>

<style scoped>

.home-div {
  height: 100vh;
  width: 100%;
  min-width: 1000px !important;
}

.flex-div {
  display: flex;
  width: 100%;
  min-width: 900px;
}

.flex-com {
  display: inline;
  width: 100%;
}
</style>
