<template>
  <div>
    <TopLogin></TopLogin>
    <Banner></Banner>
    <div class="onetable">
      <p
        style="padding-bottom:8px;padding-top:8px;font-size:14px;line-height:1.5;color:#41C7DB"
      >
        工单管理
      </p>

      <hr>
      <ul id="myTab" class="nav nav-tabs">
        <li class="active">
          <a href="#pendingOrder" data-toggle="tab">待处理</a>
        </li>
        <li>
          <a href="#acceptedOrder" data-toggle="tab">已接单</a>
        </li>
        <li>
          <a href="#completedOrder" data-toggle="tab">已完成</a>
        </li>
      </ul>
      <div id="myTabContent" class="tab-content">
        <div class="tab-pane fade in active" id="pendingOrder">
          <PendingOrder></PendingOrder>
        </div>
        <div class="tab-pane fade" id="acceptedOrder">
          <AcceptedOrder></AcceptedOrder>
        </div>
        <div class="tab-pane fade" id="completedOrder">
          <HandledOrder></HandledOrder>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./common/Banner";
import TopLogin from "./common/TopLogin";
import { Select } from "view-design";
import PendingOrder from "./common/PendingOrder";
import AcceptedOrder from "./subComponents/AccpetedOrder";
import HandledOrder from "./subComponents/HandledOrder"
export default {
  name: "OrderManagement",
  components: {
    Banner,
    TopLogin,
    PendingOrder,
    AcceptedOrder,
    HandledOrder
  }
};
</script>

<style></style>
