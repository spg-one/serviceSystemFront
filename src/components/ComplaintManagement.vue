<template>
  <div>
    <TopLogin></TopLogin>
    <Banner></Banner>
    <div class="onetable">
      <p
        style="padding-bottom:8px;padding-top:8px;font-size:14px;line-height:1.5;color:#41C7DB"
      >
        订单投诉管理
      </p>
      <hr/>
      <form class="form-inline" v-if="show">
        &nbsp;
        <div class="form-group">
          <label for="number">订单编号/投诉人</label>
          <input type="text"  class="form-control" v-model="searchInfo.number" id="number" placeholder="如：老人"/>
        </div>&nbsp;&nbsp;
        <div class="form-group">
          <label for="trader">投诉商家</label>
          <input type="text" class="form-control" v-model="searchInfo.trader" id="trader" placeholder="如：服务商一">
        </div>&nbsp;&nbsp;
        <div class="form-group">
          <label for="state">处理状态</label>
          <select v-model="searchInfo.state" id="state" class="form-control" >
            <option :disabled="true" selected value="">--请选择--</option>
            <option>已处理</option>
            <option>未处理</option>
          </select>
        </div>
        <input value="查询" type="button" @click="getList" class="btn btn-success"></input>
      </form>
<!--      详情界面-->
      <div v-model="complaint" v-if="!show" >
        <form class="form-inline" style="text-align: center">
          <div class="form-group">
            <label for="cname" style="width:80px;text-align:right">投诉人姓名</label>
            <input type="text" class="form-control" style="width: 250px" id="cname" v-model="complaint.comPerson" readonly>
          </div>
          <div class="form-group">
            <label for="cphone" style="width:80px;text-align:right">联系电话</label>
            <input type="email" class="form-control" style="width: 250px" id="cphone" v-model="complaint.personPhone" readonly>
          </div>
          <br/>
          <br/>
          <div class="form-group">
            <label for="cbusy" style="width:80px;text-align:right">投诉商家</label>
            <input type="text" class="form-control" style="width: 250px" id="cbusy" v-model="complaint.comBusiness" readonly>
          </div>
          <div class="form-group">
            <label for="cinfo" style="width:80px;text-align:right">投诉内容</label>
            <input type="email" class="form-control" style="width: 250px" id="cinfo" v-model="complaint.comInfo" readonly>
          </div>
          <br>
          <br>
          <div class="form-group">
            <label for="cwork" style="width:80px;text-align:right">投诉订单</label>
            <input type="email" class="form-control" style="width: 250px" id="cwork" v-model="complaint.comWork" readonly>
          </div>
          <div class="form-group">
            <label for="cstate" style="width:80px;text-align:right">处理状态</label>
            <input type="text" class="form-control" style="width: 250px" id="cstate" v-model="complaint.dealState" readonly>
          </div>
          <br>
          <br>
          <div class="form-group">
            <label for="bphone" style="width:80px;text-align:right">商家电话</label>
            <input type="email" class="form-control" style="width: 250px" id="bphone" v-model="complaint.busiPhone" readonly>
          </div>
          <div class="form-group">
            <label for="detail" style="width:80px;text-align:right">处理情况</label>
            <input type="text" class="form-control" style="width: 250px" id="detail" v-model="complaint.dealEnding" readonly>
          </div>
          <br>
          <br>
          <input type="button" class="btn btn-success btn-sm" @click="change" value="返回"></input>
        </form>
      </div>


      <table class="table table-striped" v-if="show">
        <thead>
        <tr>
          <th>序号</th>
          <th>投诉人</th>
          <th>联系电话</th>
          <th>投诉商家</th>
          <th>处理状态</th>
          <th>处理人</th>
          <th>处理时间</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(complaint, index) in complaints" :key="index">
          <td>{{index+1}}</td>
          <td>{{complaint.comPerson}}</td>
          <td>{{complaint.personPhone}}</td>
          <td>{{complaint.comBusiness}}</td>
          <td>{{complaint.busiPhone}}</td>
          <td>{{complaint.dealState}}</td>
          <td>{{complaint.dealPerson}}</td>
          <td>{{complaint.dealDate}}</td>
          <td><a href="javascript:void(0)" class="btn btn-info btn-sm" @click="goDetail(complaint)">详情</a></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Banner from "./common/Banner";
import TopLogin from "./common/TopLogin";
export default {
  name: "ComplaintManagement",
  components: {
    Banner,
    TopLogin
  },
  data(){
    return{
      complaint:{},
      complaints:[],
      searchInfo:{
        state:"",
        number:"",
        trader:""
      },
      show:true,
    };
  },
  methods:{
    getList() {
      if (this.searchInfo.number ===   "" || this.searchInfo.trader == "" || this.searchInfo.state == ""){
        this.getAll();
      }else {
        this.$http.get("/api/getComInfor?idORperson="+this.searchInfo.number+"&business="+this.searchInfo.trader+"&dealState="+this.searchInfo.state).then(res=>{
          this.complaints = res.data;
          if (this.complaints.length === 0){
            alert("没有这条投诉信息");
            this.getAll();
          }
        })
      }
    },
    change(){
      this.show = !this.show;
    },
    goDetail(comp){
      this.complaint = comp;
      this.show = !this.show;
    },
    getAll(){
      this.$http.get("/api/getComInforAll").then(res=>{
        this.complaints = res.data;

      })
    },

  },
  created() {
    this.getAll();
  }
};
</script>

<style></style>
