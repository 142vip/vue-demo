<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <left-side-menu/>
    <a-layout>
      <a-page-header/>
      <right-view style="height: 100%"/>
      <page-footer style="text-align: center"/>
    </a-layout>
  </a-layout>
</template>
<script>
import leftSideMenu from '@/components/common/LeftSideMenu'
import RightView from '@/components/common/RightView'
import PageFooter from '@/components/common/PageFooter'

export default {
  name: 'indexPage',
  components: {
    PageFooter,
    RightView,
    leftSideMenu
  },
  data () {
    return {
      collapsed: false
    }
  }
}
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
