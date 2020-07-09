<template>
  <div>
    <TopLogin></TopLogin>
    <Banner></Banner>
    <div class="onetable">
      <table class="table table-striped">
        <caption>
          评价管理<hr>
        </caption>
        <thead>
          <tr>
            <th>工单号</th>
            <th>工单等级</th>
            <th>老人姓名</th>
            <th>联系电话</th>
            <th>服务项目</th>
            <th>服务时间</th>
            <th>服务评价</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="Comment in Comments" v-bind:key="Comment.orderNumber">
            <td>{{ Comment.orderNumber }}</td>
            <td>{{ Comment.urgency }}</td>
            <td>{{ Comment.customerName }}</td>
            <td>{{ Comment.phone }}</td>
            <td>{{ Comment.serviceScName }}</td>
            <td>{{ Comment.dealData }}</td>
            <td>{{ Comment.serviceComment }}</td>
            <td>
              <div class="btnGroup">
                <div
                  style="margin-right:10px"
                  v-on:click="commentDetail(Comment.orderNumber)"
                  data-toggle="modal"
                  data-target="#myModalCommentDetail"
                >
                  查看详情
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="modal fade"
      id="myModalCommentDetail"
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
            <h4 class="modal-title" id="myModalLabel">评价详情</h4>
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
                    v-model="orderNumber"
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
                <label class="col-sm-5 control-label">服务人员姓名</label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    v-model="servicePersonName"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-5 control-label">处理时间</label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    v-model="dealDate"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-5 control-label">服务评价</label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    v-model="comment"
                  />
                </div>
              </div>
              
            </form>

            <form class="form-horizontal" role="form">
              <div class="form-group">
                <label class="col-sm-5 control-label">紧急程度</label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    v-model="urgency"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-5 control-label">联系方式</label>
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
                <label class="col-sm-5 control-label">服务人员手机</label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    v-model="servicePersonPhone"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-5 control-label">处理状态</label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    v-model="state"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-5 control-label">服务评语</label>
                <div class="col-sm-6">
                  <textarea
                    type="text"
                    class="form-control"
                    disabled
                    v-model="commentInfo"
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
import Banner from "./common/Banner";
import TopLogin from "./common/TopLogin";
export default {
  name: "CommentManagement",
  components: {
    Banner,
    TopLogin
  },
  data() {
    return {
      Comments: null,
      orderNumber:"",
      name:"",
      serviceLcName:"",
      servicePersonName:"",
      dealDate:"",
      comment:"",
      commentInfo:"",
      urgency:"",
      phone:"",
      serviceScName:"",
      servicePersonPhone:"",
      state:""
    };
  },
  methods: {
    sayhi() {
      console.log(this.majorClass.name);
      console.log(this.majorClass.number);
    }
  },
  created() {
    this.$http.get("api/comment/get-comment").then(res => {
      this.Comments = res.data.commentInfors;
    });
  },
  methods:{
    commentDetail(orderNumber){
      let param = new URLSearchParams();
      param.append("orderNumber",orderNumber)
      this.$http.get("api/comment/get-comment-details?orderNumber="+orderNumber).then(res => {
      this.orderNumber = res.data.commentDetail.orderNumber;
      this.name = res.data.commentDetail.customerName;
      this.serviceLcName = res.data.commentDetail.serviceLcName;
      this.servicePersonName = res.data.commentDetail.servicePersonname;
      this.dealDate = res.data.commentDetail.dealData;
      this.comment = res.data.commentDetail.serviceComment;
      this.commentInfo = res.data.commentDetail.commentInfor;
      this.urgency = res.data.commentDetail.urgency;
      this.phone = res.data.commentDetail.phone;
      this.serviceScName = res.data.commentDetail.serviceScName;
      this.servicePersonPhone = res.data.commentDetail.servicePersonphone;
      this.state = res.data.commentDetail.dealState;
    });
    }
  }
};
</script>
