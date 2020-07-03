<template>
  <div>
    <TopLogin></TopLogin>
    <Banner></Banner>
    <div class="onetable">
      <PersonalInfo></PersonalInfo>
    </div>
    <div class="onetable">
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
