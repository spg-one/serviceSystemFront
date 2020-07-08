<template>
  <div>
    <TopLogin></TopLogin>
    <Banner></Banner>
      <major-class></major-class>
      <Subclass></Subclass>
      <ItemManagement></ItemManagement>

  </div>
</template>

<script>
import Banner from "./common/Banner";
import TopLogin from "./common/TopLogin";
import MajorClass from "./subComponents/MajorClass";
import Subclass from "./subComponents/Subclass";
import ItemManagement from "./subComponents/ItemManagement";
export default {
  name: "Service",
  components: {
    Banner,
    TopLogin,
    MajorClass,
    Subclass,
    ItemManagement
  },
};
</script>

<style></style>
