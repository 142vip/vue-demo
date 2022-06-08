<template>
  <Row>
    <Menu
      class="flex-menu"
      mode="horizontal"
      theme="light"
    >
      <h3 class="system-name">OAuth2支撑平台</h3>

      <!-- <div class="layout-logo">1231312</div> -->
      <div class="layout-nav">
        <Dropdown placement="bottom-end">
          <a href="javascript:void(0)">
            <Avatar
              :src="avatarUrl"
              shape="square"
              style="margin:4px"
            />
            <strong style="color:white">{{ username }}
              <Icon type="ios-arrow-down"></Icon>
            </strong>
          </a>
          <DropdownMenu slot="list">
            <DropdownItem @click.native="logout">安全退出</DropdownItem>
            <DropdownItem @click.native="dialogFormVisible = true">意见反馈</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </Menu>
    <!-- 意见反馈  -->
    <el-dialog :visible.sync="dialogFormVisible" title="意见反馈">
      <el-input
        v-model="message"
        :rows="12"
        maxlength="500"
        placeholder="请输入需要向站长反馈的详细内容，可以是网站建议、使用疑惑等，内容不限；也可以以此来最快速的找到站长【反馈的消息将会第一时间通知到消息机器人】"
        type="textarea"
      >
      </el-input>
      <div slot="footer">
        <el-button size="small" @click="dialogFormVisible = false">取 消</el-button>
        <el-button size="small" type="primary" @click="addFeedBackMessage">确 定</el-button>
      </div>
    </el-dialog>
  </Row>

</template>

<style scoped>
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}

.layout-nav {
  width: auto;
  margin: 0 auto;
  margin-right: 10px;
}

.ivu-menu-submenu {
  margin-right: 5px !important;
  padding-right: 5px !important;
}

.flex-menu {
  display: flex;
  justify-content: space-between;
  background: #001529 !important;
}

.system-name {
  width: 200px;
  text-align: left;
  color: white;
  padding-left: 24px;
}

strong {
  margin-left: 3px;
  margin-right: 3px;
}
</style>
<script>

export default {
  data () {
    return {
      // username: '',
      avatarUrl: '',
      dialogFormVisible: false,
      message: ''
    }
  },
  methods: {
    /**
     * 退出登录
     */
    logout () {
    }

    /**
     * 用户登录信息初始化
     */
  },
  created () {
  }

}
</script>
