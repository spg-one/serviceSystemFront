<template>
  <div>
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
import PendingOrder from "./common/PendingOrder";
import Banner from "./common/Banner";
import PersonalInfo from "./PersonalInfo";
export default {
  name: "Home",
  components: {
    Banner,
    PendingOrder,
    PersonalInfo
  }
};
</script>

<style>

</style>
