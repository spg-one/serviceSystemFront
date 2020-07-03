<template>
  <div>
    <TopLogin></TopLogin>
    <Banner></Banner>
    <div class="onetable">
      <p
        style="padding-bottom:8px;padding-top:8px;font-size:14px;line-height:1.5;color:#41C7DB"
      >服务商个人信息</p>

      <div class="divider"></div>
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
          <table class="table table-striped">
            <thead>
              <tr>
                <th>工单号</th>
                <th>服务地址</th>
                <th>派单时间</th>
                <th>客户姓名</th>
                <th>联系电话</th>
                <th>服务项目</th>
                <th>服务要求时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="pendingOrder in pendingOrders" :key="pendingOrder.order_id">
                <td>{{pendingOrder.order_id}}</td>
                <td>{{pendingOrder.service_add}}</td>
                <td>{{pendingOrder.dispatch_time}}</td>
                <td>{{pendingOrder.customer_name}}</td>
                <td>{{pendingOrder.phone}}</td>
                <td>{{pendingOrder.service_name}}</td>
                <td>{{pendingOrder.deadline}}</td>
                <td>
                  <div class="btnGroup">
                    <div
                      style="margin-right:10px"
                      v-on:click="accept(pendingOrder.order_id)"
                      data-toggle="modal"
                      data-target="#myModalAccept"
                    >接受</div>
                    <div
                      v-on:click="refuse(pendingOrder.order_id)"
                      data-toggle="modal"
                      data-target="#myModalRefuse"
                    >拒绝</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="tab-pane fade" id="acceptedOrder">
          <p>没做呢</p>
        </div>
        <div class="tab-pane fade" id="completedOrder">
          <p>没做呢</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./common/Banner";
import TopLogin from "./common/TopLogin";
export default {
  name: "OrderManagement",
  data() {
    return {
      pendingOrders: {},
      data2: {},
      data3: {}
    };
  },
  components: {
    Banner,
    TopLogin
  },
  created() {
    this.$http.get("api/home-page/pending-order").then(res => {
      this.pendingOrders = res.data;
    });
  }
};
</script>

<style>
</style>
