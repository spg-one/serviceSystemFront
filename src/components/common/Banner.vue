<template>
  <div id="banner">
    <h1 id="title">服务商门户中心子系统</h1>
    <ul id="navBar" class="nav nav-pills">
      <li >
        <a class="active" href="/Home">首页</a>
      </li>
      <li>
        <a href="/InfoManagement">信息管理</a>
      </li>
      <li>
        <a href="/Service">服务项目</a>
      </li>
      <li>
        <a href="/OrderManagement">工单管理</a>
      </li>
      <li>
        <a href="/CommentManagement">评价管理</a>
      </li>
      <li>
        <a href="/ComplaintManagement">投诉管理</a>
      </li>
    </ul>
  </div>
</template>

<style>
#banner {
  display: flex;
  margin-top: 8rem;
  margin-left: 10rem;
}
#title {
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 8rem;
}

a:link {color:#000000;}      /* 未访问链接*/
a:visited {color:#000000;}  /* 已访问链接 */
a:hover {color:#000000;}  /* 鼠标移动到链接上 */
a:active {color:#000000;}  /* 鼠标点击时 */
</style>

<script>
export default {
  name: "Banner"
};

$(document).ready(function () {
	// each 是 为每一个匹配的元素 执行定义的方法
    $("#navBar").find("li").each(function () {
      var a = $(this).find("a:first")[0];
      // location.pathname 获取 当前浏览器上的url 地址
      if ($(a).attr("href") === location.pathname) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
        console.log($(a).attr("href"))
        console.log(location.pathname)
      }
    });

});
</script>
