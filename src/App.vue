<template>
  <div id="app">
    <div id="banner">
      <h1 id="title">服务商门户中心子系统</h1>
      <ul id="navBar" class="nav nav-pills">
        <li>
          <a href="#/">首页</a>
        </li>
        <li>
          <a href="#/InfoManagement">信息管理</a>
        </li>
        <li>
          <a href="#/Service">服务项目</a>
        </li>
        <li>
          <a href="#/OrderManagement">工单管理</a>
        </li>
        <li>
          <a href="#/CommentManagement">评价管理</a>
        </li>
        <li>
          <a href="#/ComplaintManagement">投诉管理</a>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#banner{
  display: flex;
  margin-top: 8rem;
  margin-left: 5rem;
}
#title {
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 8rem;
}
#navBar {
}
</style>
