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
        <tr v-for="handledOrder in handledOrders" :key="handledOrder.order_id">
          <td>{{ handledOrder.orderId }}</td>
          <td>{{ handledOrder.serviceAdd }}</td>
          <td>{{ handledOrder.orderTime }}</td>
          <td>{{ handledOrder.customerName }}</td>
          <td>{{ handledOrder.phone }}</td>
          <td>{{ handledOrder.serviceScName }}</td>
          <td>{{ handledOrder.requireTime }}</td>
          <td>{{ handledOrder.servicePersonname }}</td>
          <td>
            <div class="btnGroup">
              <div
                style="margin-right:10px"
                v-on:click="detail(handledOrder.orderId)"
                data-toggle="modal"
                data-target="#myModalDetail"
              >
                查看详情
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div
      class="modal fade"
      id="myModalDetail"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" style="width:70%">
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
            <h4 class="modal-title" id="myModalLabel">工单信息</h4>
          </div>
          <div
            class="modal-body"
            style="display:flex;justify-content: space-around"
          >
            <form class="form-horizontal" role="form">
              <div class="form-group">
                <label class="col-sm-5 control-label">工单号</label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    v-model="orderid"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-5 control-label">下单时间</label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    v-model="orderTime"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-5 control-label">服务地址</label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    v-model="serviceAdd"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-5 control-label">支付方式</label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    v-model="payment"
                  />
                </div>
              </div>
            </form>

            <form class="form-horizontal" role="form">
              <div class="form-group">
                <label class="col-sm-5 control-label">商家服务点</label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    v-model="merchant"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-5 control-label">老人姓名</label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    v-model="name"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-5 control-label">服务要求时间</label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    v-model="deadline"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-5 control-label">工单状态</label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    v-model="state"
                  />
                </div>
              </div>
            </form>

            <form class="form-horizontal" role="form">
              <div class="form-group">
                <label class="col-sm-5 control-label">工单来源</label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    v-model="source"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-5 control-label">联系电话</label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    v-model="phone"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-5 control-label">工单紧急程度</label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    v-model="urgency"
                  />
                </div>
              </div>
            </form>
          </div>
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">服务信息</h4>
          </div>
          <div
            class="modal-body"
            style="display:flex;justify-content: space-around"
          >
            <form class="form-horizontal" role="form">
              <div class="form-group">
                <label class="col-sm-5 control-label">服务方名称</label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    v-model="serviceProName"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-5 control-label">服务方式</label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    v-model="serviceMode"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-5 control-label">服务单价</label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    v-model="serviceCharge"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-5 control-label">服务要求</label>
                <div class="col-sm-6">
                  <textarea
                    class="form-control"
                    disabled
                    v-model="serviceRequire"
                  />
                </div>
              </div>
            </form>

            <form class="form-horizontal" role="form">
              <div class="form-group">
                <label class="col-sm-5 control-label">服务大类</label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    v-model="serviceLcName"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-5 control-label">服务人员</label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    v-model="servicePersonname"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-5 control-label">服务时长</label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    v-model="serviceDuration"
                  />
                </div>
              </div>
            </form>

            <form class="form-horizontal" role="form">
              <div class="form-group">
                <label class="col-sm-5 control-label">服务项目</label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    v-model="serviceScName"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-5 control-label">服务电话</label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    v-model="servicePhone"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-5 control-label">服务总价</label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    v-model="serviceCount"
                  />
                </div>
              </div>
            </form>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-default"
              data-dismiss="modal"
              id="btnConfirmDetail"
            >
              返回
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
  name: "HandledOrder",
  data() {
    return {
      handledOrders: {},
      handledOrderInfor: null,
      orderid: "",
      orderTime: "",
      serviceAdd: "",
      payment: "",
      merchant: "",
      name: "",
      deadline: "",
      source: "",
      phone: "",
      urgency: "",
      state: "",
      serviceProName: "",
      serviceMode: "",
      serviceCharge: "",
      serviceLcName: "",
      servicePersonname: "",
      serviceDuration: "",
      serviceScName: "",
      servicePhone: "",
      serviceCount: "",
      serviceRequire: ""
    };
  },
  created() {
    this.$http.get("api/order/get-handled-order").then(res => {
      this.handledOrders = res.data.handledOrders;
    });
  },
  methods: {
    detail(orderId) {
      var that = this;
      let param = new URLSearchParams();
      param.append("orderId", orderId);
      console.log(orderId);
      this.$http
        .get("api/order/get-handled-order-infor?orderId=" + orderId)
        .then(res => {
          this.handledOrderInfor = res.data.handledOrderInfor;
          this.orderid = this.handledOrderInfor.orderId;
          this.orderTime = this.handledOrderInfor.orderTime;
          this.serviceAdd = this.handledOrderInfor.serviceAdd;
          this.payment = this.handledOrderInfor.serviceMode;
          this.merchant = this.handledOrderInfor.marchantAdd;
          this.name = this.handledOrderInfor.customerName;
          this.deadline = this.handledOrderInfor.requireTime;
          this.source = this.handledOrderInfor.orderSourse;
          this.phone = this.handledOrderInfor.phone;
          this.urgency = this.handledOrderInfor.urgency;
          this.state = this.handledOrderInfor.orderState;
          this.serviceProName = this.handledOrderInfor.serviceProName;
          this.serviceMode = this.handledOrderInfor.serviceMode;
          this.serviceCharge = this.handledOrderInfor.serviceCharge;
          this.serviceLcName = this.handledOrderInfor.serviceLcName;
          this.servicePersonname = this.handledOrderInfor.servicePersonname;
          this.serviceDuration = this.handledOrderInfor.serviceDuration;
          this.serviceScName = this.handledOrderInfor.serviceScName;
          this.servicePhone = this.handledOrderInfor.servicePhone;
          this.serviceCount = this.handledOrderInfor.serviceCount;
          this.serviceRequire = this.handledOrderInfor.serviceRequire;
        });
    }
  }
};
</script>
