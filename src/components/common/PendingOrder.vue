<template>
  <div>
    <table class="table table-striped">
      <caption>待处理工单</caption>
      <div class="divider"></div>
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
    <!-- 模态框（Modal） -->
    <div
      class="modal fade"
      id="myModalRefuse"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title" id="myModalLabel">提示！</h4>
          </div>
          <div class="modal-body">确定拒绝本工单？</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-default"
              data-dismiss="modal"
              id="btnConfirmRefuse"
            >确定</button>
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              id="btnCancelRefuse"
            >取消</button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>

    <div
      class="modal fade"
      id="myModalAccept"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title" id="myModalLabel">提示！</h4>
          </div>
          <div class="modal-body">确定接受本工单？</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-default"
              data-dismiss="modal"
              id="btnConfirmAccept"
            >确定</button>
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              id="btnCancelAccept"
            >取消</button>
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
  name: "PendingOrder",
  data() {
    return {
      pendingOrders: {}
    };
  },
  created() {
    this.$http.get("/api/home-page/pending-order").then(res => {
      this.pendingOrders = res.data;
    });
  },
  methods: {
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
