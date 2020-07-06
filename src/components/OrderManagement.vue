<template>
  <div>
    <TopLogin></TopLogin>
    <Banner></Banner>
    <div class="onetable">
      <p
        style="padding-bottom:8px;padding-top:8px;font-size:14px;line-height:1.5;color:#41C7DB"
      >
        服务商个人信息
      </p>

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
        <PendingOrder></PendingOrder>
        </div>
        <div class="tab-pane fade" id="acceptedOrder">
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
                <th>服务人员</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="acceptedOrder in acceptedOrders"
                :key="acceptedOrder.order_id"
              >
                <td>{{ acceptedOrder.orderId }}</td>
                <td>{{ acceptedOrder.serviceAdd }}</td>
                <td>{{ acceptedOrder.orderTime }}</td>
                <td>{{ acceptedOrder.customerName }}</td>
                <td>{{ acceptedOrder.phone }}</td>
                <td>{{ acceptedOrder.serviceScName }}</td>
                <td>{{ acceptedOrder.requireTime }}</td>
                <td v-if="acceptedOrder.orderState=='accepted'">
                  <select
                    :id="acceptedOrder.orderId"
                    data-toggle="lgbSelect"
                    class="d-none"
                    style="padding-bottom:5px"
                  >
                    <option value="" selected hidden>--选择服务人员--</option>
                    <option value="1">佩奇</option>
                    <option value="2">乔治</option>
                    <option value="3">猪爸爸</option>
                    <option value="3">猪妈妈</option>
                  </select>
                </td>
                <td v-else>{{acceptedOrder.servicePersonname}}</td>
                <td v-if="acceptedOrder.orderState=='accepted'">
                  <div class="btnGroup" v-if="personSelected">
                    <div
                      style="margin-right:10px"
                      v-on:click="dispose(acceptedOrder.orderId)"
                      data-toggle="modal"
                      data-target="#myModalDispose"
                    >
                      处理
                    </div>
                  </div>
                  <div class="btnGroup" v-else>
                    <div
                      style="margin-right:10px"
                      v-on:click="dispose(acceptedOrder.orderId)"
                      data-toggle="modal"
                      data-target="#myModalNullServicePerson"
                    >
                      处理
                    </div>
                  </div>
                </td>
                <td v-else>处理中</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="tab-pane fade" id="completedOrder">
          <p>没做呢</p>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="myModalNullServicePerson"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              ×
            </button>
            <h4 class="modal-title" id="myModalLabel">提示！</h4>
          </div>
          <div class="modal-body">请选择服务人员</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-default"
              data-dismiss="modal"
              id="btnConfirmNullServicePerson"
            >
              确定
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <div
      class="modal fade"
      id="myModalDispose"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              ×
            </button>
            <h4 class="modal-title" id="myModalLabel">提示！</h4>
          </div>
          <div class="modal-body">确定处理本工单？</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-default"
              data-dismiss="modal"
              id="btnConfirmDispose"
              v-on:click="setOrderInprocessing()"
            >
              确定
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              id="btnCancelDispose"
            >
              取消
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
  </div>
</template>

<script>
import Banner from "./common/Banner";
import TopLogin from "./common/TopLogin";
import { Select } from "view-design";
import PendingOrder from "./common/PendingOrder"
export default {
  name: "OrderManagement",
  data() {
    return {
      pendingOrders: {},
      acceptedOrders: {},
      handledOrders: {},
      personSelected: false,
      orderNotInProcessing: true,
      servicePerson:"",
      orderId:""
    };
  },
  components: {
    Banner,
    TopLogin,
    PendingOrder
  },
  created() {
    this.$http.get("api/home-page/pending-order").then(res => {
      this.pendingOrders = res.data;
    });

    this.$http.get("api/order/get-accepted-order").then(res => {
      this.acceptedOrders = res.data.acceptedOrders;
    });

    this.$http.get("api/order/get-handled-order").then(res => {
      this.handledOrders = res.data;
    });
  },
  methods: {
    dispose(orderId) {
      let that = this;
      if (
        $("#" + orderId.toString() + " option:selected").text() !=
        "--选择服务人员--"
      ) {
        that.personSelected = true;
        that.servicePerson=$("#" + orderId.toString() + " option:selected").text();
        that.orderId=orderId+"";
      }
    },
    setOrderInprocessing() {
      let param = new URLSearchParams();
      param.append("orderId",this.orderId);
      param.append("servicePersonname",this.servicePerson);
      param.append("orderState","processing");
      this.orderNotInProcessing = false;
      this.$http.post("api/order/set-service-person",param);
      this.$http.get("api/order/get-accepted-order").then(res => {
      this.acceptedOrders = res.data.acceptedOrders;
    });
    },
    accept(order_id) {
      let that = this;
      $("#btnConfirmAccept").on("click", function() {
        let param = new URLSearchParams();
        param.append("order_id", order_id);
        that.$http.post("/api/home-page/accept-order", param);
        that.$http.get("/api/home-page/pending-order").then(res => {
          that.pendingOrders = res.data;
        });
      });
    },
    refuse(order_id) {
      let that = this;
      $("#btnConfirmRefuse").on("click", function() {
        let param = new URLSearchParams();
        param.append("order_id", order_id);
        that.$http.post("/api/home-page/refuse-order", param);
        that.$http.get("/api/home-page/pending-order").then(res => {
          that.pendingOrders = res.data;
        });
      });
    }
  }
};
</script>

<style></style>
