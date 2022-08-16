<template>
  <div class="hello-world">
    <h1>{{ msg }}</h1>
    <p>
      作者：<a href="https://github.com/mmdapl" rel="noopener" target="_blank">Rong姐姐好可爱</a>.
      |
      出品组织：<a href="https://github.com/fairyfan1998" rel="noopener" target="_blank">142vip</a>.

    </p>
    <h3>基础工具</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" rel="noopener"
             target="_blank">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" rel="noopener"
             target="_blank">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" rel="noopener"
             target="_blank">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" rel="noopener"
             target="_blank">eslint</a></li>
    </ul>
    <h3>常用组件</h3>
    <ul>
      <li><a href="https://router.vuejs.org" rel="noopener" target="_blank">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" rel="noopener" target="_blank">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" rel="noopener" target="_blank">vue-devtools</a>
      </li>
      <li><a href="https://vue-loader.vuejs.org" rel="noopener" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" rel="noopener" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello-world {
  margin-top: 100px;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  font-size: 18px;
}
</style>
