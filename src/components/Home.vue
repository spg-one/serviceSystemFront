<template>
  <div>
    <Banner></Banner>
    <h2>首页</h2>
    <PersonalInfo></PersonalInfo>
    <PendingOrder></PendingOrder>
  </div>
</template>

<script>
import PendingOrder from './common/PendingOrder'
import Banner from './common/Banner'
import PersonalInfo from './PersonalInfo'
export default {
  name: 'Home',
  components: {
    Banner,
    PendingOrder,
    PersonalInfo
  }
}
</script>

<style>
</style>
