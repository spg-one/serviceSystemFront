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
            <div class="btnGroup">
              <div
                style="margin-right:10px"
                v-on:click="dispose(acceptedOrder.orderId)"
                data-toggle="modal"
                data-target="#myModalHandle"
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
      id="myModalHandle"
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
            <h4 class="modal-title" id="myModalLabel">请完善工单信息</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal" role="form">
              <div class="form-group">
                <label for="firstname" class="col-sm-3 control-label"
                  >工单紧急程度</label
                >
                <div class="col-sm-9">
                  <select
                    data-toggle="lgbSelect"
                    class="d-none"
                    style="padding-bottom:5px"
                    v-model="urgency"
                  >
                    <option value="false" disabled selected hidden
                      >--选择工单紧急程度--</option
                    >
                    <option value="一般">一般</option>
                    <option value="紧急">紧急</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="firstname" class="col-sm-3 control-label"
                  >服务人员</label
                >
                <div class="col-sm-9">
                  <select
                    data-toggle="lgbSelect"
                    class="d-none"
                    style="padding-bottom:5px"
                    v-model="servicePerson"
                  >
                    <option value="false" disabled selected hidden
                      >--选择服务人员--</option
                    >
                    <option value="佩奇">佩奇</option>
                    <option value="乔治">乔治</option>
                    <option value="猪爸爸">猪爸爸</option>
                    <option value="猪妈妈">猪妈妈</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label">服务人员电话</label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    id="firstname"
                    placeholder="请输入服务人员电话"
                    v-model="servicePersonPhone"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="firstname" class="col-sm-3 control-label"
                  >服务单价</label
                >
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    id="firstname"
                    placeholder="请输入服务单价"
                    v-model="unitPrice"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="lastname" class="col-sm-3 control-label"
                  >服务时长</label
                >
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    id="lastname"
                    placeholder="请输入服务时长"
                    v-model="duration"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label">收费方式</label>
                <div class="col-sm-9">
                  <p class="form-control-static">{{ serviceMode }}</p>
                </div>
              </div>
              <div class="form-group">
                <label for="firstname" class="col-sm-3 control-label"
                  >服务总价</label
                >
                <div class="col-sm-9">
                  <p class="form-control-static">{{ duration * unitPrice }}</p>
                </div>
              </div>
              <div class="form-group">
                <label for="firstname" class="col-sm-3 control-label"
                  >服务次数</label
                >
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    id="firstname"
                    placeholder="请输入服务次数"
                    v-model="times"
                  />
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              data-dismiss="modal"
              id="btnConfirmHandle"
              v-on:click="handle"
            >
              提交处理
            </button>
             <button
              type="button"
              class="btn btn-default"
              data-dismiss="modal"
              id="btnCancelHandle"
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

      serviceMode: "",

      serviceModePer: "",

      urgency: "",
      servicePerson: "",
      servicePersonPhone: "",
      unitPrice: "",
      duration: "",
      times: "",

      orderNotInProcessing: true,
      orderid: ""
    };
  },
  created() {
    this.$http.get("api/order/get-accepted-order").then(res => {
      this.acceptedOrders = res.data.acceptedOrders;
    });
  },
  methods: {
    dispose(orderId) {
      for (var i = 0; i < this.acceptedOrders.length; i++) {
        if (this.acceptedOrders[i].orderId == orderId) {
          this.serviceMode = this.acceptedOrders[i].serviceMode;

          this.orderid = orderId;
        }
      }
    },
    handle() {
      var that = this;
      let param = new URLSearchParams();
      param.append("orderId", that.orderid);
      param.append("urgency", that.urgency);
      param.append("serviceCharge", that.unitPrice);
      param.append("serviceDuration", that.duration);
      param.append("serviceCount", that.unitPrice * that.duration);
      param.append("servicePersonname", that.servicePerson);
      param.append("servicePersonphone", that.servicePersonPhone);
      param.append("serviceTimes", that.times);
      that.$http.post("api/order/handle", param).then(res => {});
    }
  }
};
</script>
