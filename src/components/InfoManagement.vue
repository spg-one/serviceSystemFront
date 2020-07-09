<template>
  <div>
    <TopLogin></TopLogin>
    <Banner></Banner>
    <div class="onetable">
      <table class="table table-striped">
        <caption>
          服务商基本信息
        </caption>
        <hr />
      </table>
      <div style="display:flex;justify-content: space-between">
        <form class="form-horizontal" role="form">
          <div class="form-group">
            <label class="col-sm-4 control-label">商家名称</label>
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control"
                disabled
                v-model="servicerName"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-4 control-label">手机号码</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" v-model="servicerPhone" />
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-4 control-label">管理人员</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" v-model="managePerson" />
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-4 control-label">执照号码</label>
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control"
                disabled
                v-model="licenseNumber"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-4 control-label">所属省份</label>
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control"
                disabled
                v-model="province"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-4 control-label">所属区县</label>
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control"
                disabled
                v-model="county"
              />
            </div>
          </div>
        </form>

        <form class="form-horizontal" role="form">
          <div class="form-group">
            <label class="col-sm-4 control-label">商家性质</label>
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control"
                disabled
                v-model="servicerType"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-4 control-label">服务状态</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" v-model="serviceStatus" />
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-4 control-label">周末服务</label>
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control"
                disabled
                v-model="weekendService"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-4 control-label">节假服务</label>
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control"
                disabled
                v-model="holidayService"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-4 control-label">所属城市</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" disabled v-model="city" />
            </div>
          </div>
        </form>
        <img src="../assets/营业执照.png" alt="工商执照" />
      </div>
    </div>
    <div class="onetable">
      <table class="table table-striped">
        <caption>
          服务商其它信息
        </caption>
        <hr />
      </table>
      <div style="display:flex;justify-content: space-between">
        <form class="form-horizontal" role="form">
          <div class="form-group">
            <label class="col-sm-4 control-label">固定号码</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" v-model="telephone" />
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-4 control-label">商家简介</label>
            <div class="col-sm-8">
              <textarea
                type="text"
                class="form-control"
                v-model="servicerInfo"
              />
            </div>
          </div>
        </form>

        <form class="form-horizontal" role="form">
          <div class="form-group">
            <label class="col-sm-4 control-label">商家地址</label>
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control"
                disabled
                v-model="servicerAddress"
              />
            </div>
          </div>
        </form>
        <form class="form-horizontal" role="form">
          <div class="form-group">
            <label class="col-sm-4 control-label">营业时间</label>
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control"
                disabled
                v-model="businessHours"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
    <div style="text-align:center;margin:6rem">
      <button class="btn btn-success" @click="save" data-toggle="modal"
                data-target="#myModalSave">保存</button>
    </div>
    <div
      class="modal fade"
      id="myModalSave"
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
            <h4 class="modal-title" id="myModalLabel">提示</h4>
          </div>
          <div class="modal-body">
            更新成功
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-success"
              data-dismiss="modal"
              id="btnConfirmHandle"
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
import Banner from "./common/Banner";
import TopLogin from "./common/TopLogin";
export default {
  name: "InfoManagement",
  components: {
    Banner,
    TopLogin
  },
  data() {
    return {
      servicerName: "",
      servicerPhone: "",
      managePerson: "",
      licenseNumber: "",
      province: "",
      county: "",
      servicerType: "",
      serviceStatus: "",
      weekendService: "",
      holidayService: "",
      city: "",
      telephone: "",
      servicerInfo: "",
      servicerAddress: "",
      businessHours: ""
    };
  },
  created() {
    this.$http.get("api/servicer-info/get-info").then(res => {
      this.servicerName = res.data.servicerInfor.servicerName;
      this.servicerPhone = res.data.servicerInfor.servicerPhone;
      this.managePerson = res.data.servicerInfor.managePerson;
      this.licenseNumber = res.data.servicerInfor.licenseNumber;
      this.province = res.data.servicerInfor.province;
      this.county = res.data.servicerInfor.county;
      this.servicerType = res.data.servicerInfor.servicerType;
      this.serviceStatus = res.data.servicerInfor.serviceStatus;
      this.weekendService = res.data.servicerInfor.weekendService;
      this.holidayService = res.data.servicerInfor.holidayService;
      this.city = res.data.servicerInfor.city;
      this.telephone = res.data.servicerInfor.telephone;
      this.servicerInfo = res.data.servicerInfor.servicerInfo;
      this.servicerAddress = res.data.servicerInfor.servicerAddress;
      this.businessHours = res.data.servicerInfor.businessHours;
    });
  },
  methods: {
    save() {}
  }
};
</script>

<style></style>
