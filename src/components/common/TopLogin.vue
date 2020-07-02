<template>
  <div id="toplogin">
      <div><a href="../Login">登录</a></div>
      <div>|</div>
      <div><a id="eee" href="https://github.com/feidudeqiu/serviceSystem">联系我们</a></div>
  </div>
</template>

<style>
#toplogin{
    display: flex;
    padding-left: 90%;
    background-color: #41C7DB;
}

#toplogin :hover{
    cursor: pointer;
    text-decoration: underline;
}


</style>

<script>
export default {
  name: 'TopLogin'
}
</script>
