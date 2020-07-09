<template>
  <div>
    <div id="toplogin">
      <div><a href="../Login">登录</a></div>
      <div>|</div>
      <div v-on:click="logout">登出</div>
      <div>|</div>
      <div>
        <a id="eee" href="https://github.com/feidudeqiu/serviceSystem"
          >联系我们</a
        >
      </div>
    </div>
  </div>
</template>

<style>
#toplogin {
  display: flex;
  padding-left: 90%;
  background-color: #41c7db;
}

#toplogin :hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>

<script>
export default {
  name: "TopLogin",
  created() {
    
    this.loginState = sessionStorage.getItem("personId") != null;
  },
  methods:{
    logout(){
      var confirmlogout = confirm("确定要退出吗？")
      if(confirmlogout){
        var that = this;
      that.$http.get("api/login/logout");
      location.reload()
      }
      else{

      }
    }
  }
};
</script>
