<template>
  <div>
    <TopLogin></TopLogin>
    <Banner></Banner>
    <h2>服务项目</h2>
  </div>
</template>

<script>
import Banner from "./common/Banner";
import TopLogin from "./common/TopLogin";
export default {
  name: "Service",
  components: {
    Banner,
    TopLogin
  }
};
</script>

<style></style>
