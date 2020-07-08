<template>
  <div class="onetable">
  <p
    style="padding-bottom:8px;padding-top:8px;font-size:14px;line-height:1.5;color:#41C7DB"
  >
    服务项目（小类）管理
  </p>
  <hr/>
  <form class="form-inline">
    &nbsp;
    <div class="form-group">
      <label for="ServiceName">服务小类名称</label>
      <input type="text" class="form-control" v-model="subclass.name" id="ServiceName" placeholder="如：设备维修">
    </div>&nbsp;&nbsp;
    <div class="form-group">
      <label for="Number">系统编号</label>
      <input type="text" class="form-control" v-model="subclass.number" id="Number" placeholder="如：001">
    </div>&nbsp;&nbsp;
    <input type="button" class="btn btn-success" @click="searchClass" value="查询"></input>
  </form>
  <table class="table table-striped" >
    <thead>
    <tr>
      <th>序号</th>
      <th>系统编号</th>
      <th>服务大类名称</th>
      <th>服务小类名称</th>
      <th>描述</th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="(subclass,index) in subclasses" :key="index">
      <td>{{index+1}}</td>
      <td>{{subclass.systemId}}</td>
      <td>{{subclass.systemLcName}}</td>
      <td>{{subclass.systemScName}}</td>
      <td>{{subclass.description}}</td>
    </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
    export default {
        name: "Subclass",
      data(){
        return {
          subclass:{},
          subclasses:[],
        };
      },
      methods:{
          getAll(){
            this.$http.get("/api/getSCall").then(res=>{
              this.subclasses = res.data;
            });
          },
        searchClass(){
          this.$http.get("/api/get_SC_infor?name="+this.subclass.name+"&SystemId="+this.subclass.number).then(res=>{
            this.subclasses = res.data;
            if (Object.keys(this.subclasses).length == 0){
              alert("服务项目名称或编号错误");
              this.getAll();
            }
          });
        }
      },
      created() {
        this.getAll();
      }
    }
</script>

<style scoped>

</style>
