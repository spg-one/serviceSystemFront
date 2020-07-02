<template>
  <div>
    <table class="table table-striped">
      <caption>待处理工单</caption>
      <div class="divider"> </div>
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
        <tr v-for="pendingOrder in pengdingOrders" :key="pendingOrder.order_id">
          <td>{{pendingOrder.order_id}}</td>
          <td>{{pendingOrder.service_add}}</td>
          <td>{{pendingOrder.dispatch_time}}</td>
          <td>{{pendingOrder.customer_name}}</td>
          <td>{{pendingOrder.phone}}</td>
          <td>{{pendingOrder.service_name}}</td>
          <td>{{pendingOrder.deadline}}</td>
          <td>
            <div class="btnGroup">
              <div style="margin-right:10px">接受</div>
              <div>拒绝</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PendingOrder',
  data() {
    return {
      pengdingOrders:{}
    };
  },
  created () {
    this.$http.get('/home-page/pending-order')
      .then((res) =>{
        this.pengdingOrders=res.data
        console.log(this.pengdingOrders)
      })
  }
}
</script>
