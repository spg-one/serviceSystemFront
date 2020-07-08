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
          <th>处理时间</th>
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
          <td>猪</td>
          <td>猪</td>
          <td>
            <div class="btnGroup" v-if="personSelected">
              <div
                style="margin-right:10px"
                v-on:click="dispose(acceptedOrder.orderId)"
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
  </div>
</template>
<script>
export default {
  name: "HandledOrder",
  data() {
    return {
      handledOrders: {}
    };
  },
  created() {
    this.$http.get("api/order/get-handled-order").then(res => {
      this.handledOrders = res.data;
    });
  },
  methods: {}
};
</script>
