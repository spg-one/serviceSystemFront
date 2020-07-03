<template>
  <div>
    <TopLogin></TopLogin>
    <Banner></Banner>
    <h2>评价管理</h2>
  </div>
</template>

<script>
import Banner from './common/Banner'
import TopLogin from "./common/TopLogin"
export default {
  name: 'CommentManagement',
  components: {
    Banner,
    TopLogin
  }
}
</script>

<style>
</style>
