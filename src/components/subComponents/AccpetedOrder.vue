<template>
  <div>
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
          <td v-if="acceptedOrder.orderState == 'accepted'">
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
          <td v-else>{{ acceptedOrder.servicePersonname }}</td>
          <td v-if="acceptedOrder.orderState == 'accepted'">
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
export default {
  name: "AcceptedOrder",
  data() {
    return {
      acceptedOrders: {},
      handledOrders: {},
      personSelected: false,
      orderNotInProcessing: true,
      servicePerson: "",
      orderId: ""
    };
  },
  created() {
    this.$http.get("api/order/get-accepted-order").then(res => {
      this.acceptedOrders = res.data.acceptedOrders;
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
        that.servicePerson = $(
          "#" + orderId.toString() + " option:selected"
        ).text();
        that.orderId = orderId + "";
      }
    },
    setOrderInprocessing() {
      let param = new URLSearchParams();
      param.append("orderId", this.orderId);
      param.append("servicePersonname", this.servicePerson);
      param.append("orderState", "processing");
      this.orderNotInProcessing = false;
      this.$http.post("api/order/set-service-person", param);
      this.$http.get("api/order/get-accepted-order").then(res => {
        this.acceptedOrders = res.data.acceptedOrders;
      });
    }
  }
};
</script>
