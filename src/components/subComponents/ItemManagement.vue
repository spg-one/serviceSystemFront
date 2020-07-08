<template>
  <div class="onetable">
    <p
      style="padding-bottom:8px;padding-top:8px;font-size:14px;line-height:1.5;color:#41C7DB"
    >
      服务项目
    </p>
    <hr/>
    <form class="form-inline">
      &nbsp;
      <div class="form-group">
        <label for="majorName">服务大类名称</label>
        <select v-model="formItem.majorName" class="form-control" id="majorName" @change="getValues">
          <option value="" selected :disabled="true">--请选择--</option>
          <option v-for="item in majorName" :value="item" >{{item}}</option>
        </select>
      </div>
      &nbsp;&nbsp;
      <div class="form-group">
        <label for="subName">服务小类名称</label>
        <select v-model="formItem.subName" class="form-control" id="subName" >
          <option value="" selected :disabled="true">--请选择--</option>
          <option v-for="item in subName" :value="item" >{{item}}</option>
        </select>
      </div>
      &nbsp;&nbsp;
      <input type="button" @click="searchClass(formItem.majorName,formItem.subName)" class="btn btn-success" value="查询"></input>
      <a href="javascript:void(0)" class="btn btn-default" @click="goShow" style="float: right;margin-right: 75px">新增</a>

    </form>
    <form method="post" enctype="multipart/form-data">
    <table class="table table-striped">
      <thead>
      <tr>
        <th>序号</th>
        <th>服务大类名称</th>
        <th>服务小类名称</th>
        <th>服务内容介绍</th>
        <th>收费方式</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-model="itemOne" v-if="show">
        <td style="display:table-cell; vertical-align:middle"><input type="text" v-model="itemOne.serviceId" class="form-control"></input></td>
        <td style="display:table-cell; vertical-align:middle"><input type="text" v-model="itemOne.systemLcName" class="form-control"></input></td>
        <td style="display:table-cell; vertical-align:middle"><input type="text" v-model="itemOne.systemScName" class="form-control"></input></td>
        <td style="display:table-cell; vertical-align:middle"><input type="text" v-model="itemOne.simpleInfo" class="form-control"></input></td>
        <td style="display:table-cell; vertical-align:middle"><input type="text" v-model="itemOne.charge" class="form-control"></input></td>
        <td>
          <a href="javascript:void(0)" class="btn btn-default" @click="add(itemOne)">添加</a>
        </td>
      </tr>
      <tr v-model="itemEdit" v-if="Edit">
        <td v-model="itemEdit.serviceId" style="display:table-cell; vertical-align:middle">{{itemEdit.serviceId}}</td>
        <td style="display:table-cell; vertical-align:middle"><input type="text" v-model="itemEdit.systemLcName" class="form-control"></input></td>
        <td style="display:table-cell; vertical-align:middle"><input type="text" v-model="itemEdit.systemScName" class="form-control"></input></td>
        <td style="display:table-cell; vertical-align:middle"><input type="text" v-model="itemEdit.simpleInfo" class="form-control"></input></td>
        <td style="display:table-cell; vertical-align:middle"><input type="text" v-model="itemEdit.charge" class="form-control"></input></td>
        <td>
          <a href="javascript:void(0)" class="btn btn-default" @click="getEdit">修改</a>
        </td>
      </tr>
        <tr v-for="(item, key) in items" :key="key">
          <td style="display:table-cell; vertical-align:middle">{{key+1}}</td>
          <td style="display:table-cell; vertical-align:middle">{{item.systemLcName}}</td>
          <td style="display:table-cell; vertical-align:middle">{{item.systemScName}}</td>
          <td style="display:table-cell; vertical-align:middle">{{item.simpleInfo}}</td>
          <td style="display:table-cell; vertical-align:middle">{{item.charge}}</td>
          <td>
            <a href="javascript:void(0)" class="btn btn-default" @click="goEdit(item)">编辑</a>
            <a href="javascript:void(0)" class="btn btn-danger" @click="goDelete(item)">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
    </form>
  </div>
</template>

<script>
    export default {
        name: "ItemManagement",
      data() {
        return {
          formItem: {
            majorName: "",
            subName: "",
          },
          majorName: [],
          subName: [],
          itemOne:{},
          itemEdit:{},
          items: [],
          names: {},
          show:false,
          Edit:false,
          mchange:false,
          schange:false,
        };
      },
      methods: {
          getAll(){
            this.$http.get("/api/getInforAll").then(res=>{
            this.items = res.data;
              // console.log(this.items);
            })
          },
        getList(){
          this.$http.get("/api/getLcSc").then(res=>{
            this.names = res.data;
            this.majorName = Object.keys(this.names);
            // console.log(res.data);
          });
        },
        getValues(){
          this.subName = this.names[this.formItem.majorName];
          this.formItem.subName = this.subName[0];
        },
        searchClass(m,s) {
          this.$http.get("/api/get_infor?LC_name="+m+"&SC_name="+s).then(res=>{
            this.items = res.data;
            if (Object.keys(this.items).length == 0){
              alert("暂无此类服务项目");
              this.getAll();
            }
          });
          this.show = false;
          this.Edit = false;
        },
        goShow(){
          this.show = true;
          this.Edit = false;
        },
        add:function(one){
          this.$http.post("/api/insertInfor",one).then(res=>{
              alert(res.data);

          this.getList();
          this.formItem.majorName = one.systemLcName;
          this.formItem.subName = one.systemScName;
          this.itemOne={};
          });
        },
        goEdit:function(item) {
            this.show = false;
          this.Edit = true;
          this.itemEdit = item;
        },
        getEdit(){
          this.$http.post("/api/updateInfor",this.itemEdit).then(res=>{
            alert(res.data);
            this.getList();
            this.formItem.majorName = this.itemEdit.systemLcName;
            this.formItem.subName = this.itemEdit.systemScName;
          })
        },
        goDelete:function (item) {
            this.show = false;
            this.Edit = false;
            if(window.confirm("确定要删除\""+item.systemLcName+"--"+item.systemScName+"\"吗？")){
              var number = item.serviceId;
              this.$http.get("/api/deleteByLcSc?id="+number).then(res=>{
                alert(res.data);
                this.getList();
                this.formItem.majorName = this.majorName[0];
                this.getValues();
                  this.getAll();
              })
            }
        },
        majorchange(){
            this.mchange = true;
            if (this.mchange && this.show || this.Edit){
          console.log(this.formItem.majorName);
              this.searchClass(this.formItem.majorName,this.formItem.subName);
              this.getValues();
            }
            this.show = false;
          this.Edit = false;
          this.mchange = false;

        },
        // subchange(){
        //   this.schange = true;
        //   if (this.schange && this.Edit){
        //     this.getValues();
        //   }
        //   this.Edit = false;
        //   this.schange = false;
        // }
      },
      watch:{
          majorName:'majorchange',
          // subName:'subchange',
      },
      created(){
        this.getAll();
        this.getList();

      },
    }
</script>

<style scoped>

</style>
