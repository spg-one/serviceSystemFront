<template>
  <div>
    <TopLogin></TopLogin>
    <Banner></Banner>
    <div class="onetable">
      <PersonalInfo></PersonalInfo>
    </div>
    <div class="onetable">
      <p
        style="padding-bottom:8px;padding-top:8px;font-size:14px;line-height:1.5;color:#41C7DB"
      >
        待处理工单
      </p>
      <hr>
      <PendingOrder></PendingOrder>
    </div>
  </div>
</template>

<script>
import TopLogin from "./common/TopLogin";
import PendingOrder from "./common/PendingOrder";
import Banner from "./common/Banner";
import PersonalInfo from "./subComponents/PersonalInfo";
export default {
  name: "Home",
  components: {
    Banner,
    PendingOrder,
    PersonalInfo,
    TopLogin
  }
};
</script>

<style></style>
