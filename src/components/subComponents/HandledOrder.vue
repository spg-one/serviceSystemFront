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
      <div class="modal-dialog" style="width:60%">
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
            <h4 class="modal-title" id="myModalLabel">工单详情</h4>
          </div>
          <div class="modal-body" style="display:flex">
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
              class="btn btn-default"
              data-dismiss="modal"
              id="btnConfirmHandle"
              v-on:click="handle"
            >
              确定
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
      handledOrders: {}
    };
  },
  created() {
    this.$http.get("api/order/get-handled-order").then(res => {
      this.handledOrders = res.data.handledOrders;
    });
  },
  methods: {}
};
</script>
