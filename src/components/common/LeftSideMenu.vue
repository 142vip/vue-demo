<template>
  <Sider class="slider-div" hide-trigger>
    <!-- 管理员菜单栏 -->
    <Menu
      v-if="role === 'super'"
      :open-names="[
        'data-statistics',
        'user-info',
        'client-info',
        'log-info',
        'tools'
      ]"
      active-name="data-view"
      theme="light"
      width="auto"
    >
      <Submenu name="data-statistics">
        <template slot="title">
          <Icon type="ios-navigate"></Icon>
          数据统计
        </template>
        <MenuItem name="data-view">流量可视化</MenuItem>
        <MenuItem name="login-statistics">登录统计</MenuItem>
        <MenuItem name="user-order">用户排行</MenuItem>
      </Submenu>
      <Submenu name="client-info">
        <template slot="title">
          <Icon type="ios-keypad"></Icon>
          客户端列表
        </template>
        <MenuItem name="clientInfo" to="/client">客户端信息</MenuItem>
        <MenuItem name="clientBlackList" to="/clientBlackList">黑名单</MenuItem>
      </Submenu>
      <Submenu name="user-info">
        <template slot="title">
          <Icon type="ios-analytics"></Icon>
          用户列表
        </template>
        <MenuItem name="superAdmin" to="/super">超级管理员</MenuItem>

        <MenuItem name="clientAdmin" to="/admin">管理员</MenuItem>
        <MenuItem name="clientUser" to="/user">普通用户</MenuItem>
      </Submenu>
      <Submenu name="log-info">
        <template slot="title">
          <Icon type="ios-analytics"></Icon>
          日志信息
        </template>
        <MenuItem name="3-1">路由日志</MenuItem>
        <MenuItem name="3-2">操作日志</MenuItem>
      </Submenu>
      <Submenu name="tools">
        <template slot="title">
          <Icon type="ios-analytics"></Icon>
          常用工具
        </template>
        <MenuItem name="3-1">路由日志</MenuItem>
        <MenuItem name="3-2">操作日志</MenuItem>
      </Submenu>
    </Menu>

    <!-- 普通用户 -->
    <Menu
      v-if="role === 'admin'"
      :active-name="activeName"
      theme="light"
      width="auto"
    >
      <MenuGroup title="基础概念">
        <MenuItem name="/introduce" to="/introduce">
          <Icon type="ios-apps"/>
          系统介绍
        </MenuItem>
        <MenuItem name="/oauth2Access" to="/oauth2Access">
          <Icon type="md-key"/>
          Oauth接入
        </MenuItem>
      </MenuGroup>
      <MenuGroup title="数据总览">
        <MenuItem name="/myClientInfo" to="/myClientInfo">
          <Icon type="ios-appstore"/>
          我的客户端
        </MenuItem>
        <MenuItem name="/myappInfo" to="/myappInfo">
          <Icon type="md-wifi"/>

          我的应用
        </MenuItem>
      </MenuGroup>
      <MenuGroup title="开始使用">
        <MenuItem name="/createClient" to="/createClient">
          <Icon type="ios-add-circle"/>
          我要接入
        </MenuItem>
        <MenuItem name="/addClientApp" to="/addClientApp">
          <Icon type="logo-android"/>
          创建应用
        </MenuItem>
        <MenuItem name="/versionIteration" to="/versionIteration">
          <Icon type="ios-hammer"/>
          版本迭代
        </MenuItem>
      </MenuGroup>
      <MenuGroup title="基础信息">
        <MenuItem name="/myUserInfo" to="/myUserInfo">
          <Icon type="md-contact"/>
          用户信息
        </MenuItem>
        <MenuItem name="/bilibili" to="/bilibili">
          <!-- <Icon type="md-contact" /> -->
          <span style="padding-right:5px;padding-top:2px;">
            <svg class="icon" height="14" p-id="2406" t="1587913768034" version="1.1"
                 viewBox="0 0 1069 1024" width="14" xmlns="http://www.w3.org/2000/svg"><path
              d="M868.93 171.112H697.817l77.535-77.535c13.369-13.368 13.369-32.084 0-45.452s-32.083-13.368-45.451 0L598.893 179.133H470.559L339.55 48.125c-10.695-13.368-26.736-16.041-42.778-8.02-2.674 0-2.674 2.673-5.347 5.347-13.369 13.368-13.369 32.083 0 45.451l80.208 80.21H200.522c-93.577 0-171.112 77.535-171.112 171.112v425.107c0 90.903 77.535 168.438 171.112 168.438h26.736c0 32.084 26.737 56.146 56.147 56.146s56.146-26.736 56.146-56.146h395.697c2.674 32.084 29.41 56.146 61.494 53.473 29.41-2.674 50.798-24.063 53.472-53.473h21.39c93.576 0 171.111-77.535 171.111-171.112V339.551c-2.673-93.577-80.208-168.439-173.785-168.439zM863.582 831.5H211.217c-34.757 0-61.494-29.41-64.167-64.167l-2.674-433.128c0-34.758 29.41-64.167 64.167-64.167H860.91c34.757 0 61.493 29.41 64.167 64.167l2.673 433.128c-2.673 37.43-29.41 64.167-64.167 64.167z"
              fill="#515151" p-id="2407"></path><path
              d="M422.433 417.086l16.042 80.209-213.89 40.104-16.042-80.208 213.89-40.105z m205.87 80.209l16.042-80.209 213.89 40.105-16.042 80.208-213.89-40.104z m42.778 168.439c0 2.673 0 8.02-2.674 10.694-13.368 29.41-42.778 48.126-77.535 50.8-21.389 0-42.778-10.695-56.146-26.737-16.042 16.042-34.757 26.736-56.146 26.736-32.084-2.673-61.494-21.389-77.536-50.799 0-2.673-2.673-5.347-2.673-10.694 0-10.695 8.02-18.716 18.715-21.39h2.674c8.02 0 13.368 2.674 16.042 10.695 0 0 21.389 29.41 40.104 29.41 37.43 0 37.43-32.083 58.82-56.146 24.063 26.736 24.063 56.146 58.82 56.146 24.062 0 40.104-29.41 40.104-29.41 2.674-5.347 10.695-10.694 16.042-10.694 10.694-2.674 18.715 5.347 21.389 16.041v5.348z"
              fill="#515151" p-id="2408"></path></svg>
          </span>
          B站数据
        </MenuItem>
        <!-- <MenuItem name="4">
          <Icon type="md-settings" />
          修改密码
        </MenuItem> -->
      </MenuGroup>
    </Menu>
  </Sider>
</template>

<style scoped>
.ivu-menu-item {
  padding-top: 5px !important;
  padding-bottom: 5px !important;
}

.slider-div {
  height: 100vh;
}

ul {
  height: 100vh;
}
</style>
<script>
export default {
  name: 'leftSideMenu',
  data () {
    return {
      role: localStorage.getItem('role'),
      activeName: ''
    }
  },
  watch: {
    $route (to, from) {
      this.activeName = to.name
    }
  },

  created () {
    this.activeName = this.$route.name
  }
}
</script>
