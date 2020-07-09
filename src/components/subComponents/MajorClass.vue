<template>
  <div class="onetable">
    <p
    style="padding-bottom:8px;padding-top:8px;font-size:14px;line-height:1.5;color:#41C7DB"
    >
    服务项目（大类）管理
     </p>
    <hr/>
    <form class="form-inline">
      &nbsp;
      <div class="form-group">
        <label for="ServiceName">服务名称</label>
        <input type="text"  class="form-control" v-model="majorClass.name" id="ServiceName" placeholder="如：设备维修"/>
      </div>&nbsp;&nbsp;
      <div class="form-group">
        <label for="Number">系统编号</label>
        <input type="text" class="form-control" v-model="majorClass.number" id="Number" placeholder="如：001">
      </div>&nbsp;&nbsp;
      <input value="查询" type="button" @click="searchClass" class="btn btn-success">
    </form>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>序号</th>
        <th>系统编号</th>
        <th>服务名称</th>
        <th>描述</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(majorClass, index) in MajorClasses" :key="index">
        <td>{{index+1}}</td>
        <td>{{majorClass.systemId}}</td>
        <td>{{majorClass.serviceName}}</td>
        <td>{{majorClass.description}}</td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
    export default {
      name: "MajorClass",
      data(){
        return {
          majorClass:{},
          MajorClasses:[]
        };
      },
      methods:{
        getAll(){
          this.$http.get("/api/getLCall").then(res=>{
          this.MajorClasses = res.data;
           });
        },
          searchClass(){
            this.$http.get("/api/get_LC_infor?SystemId="+this.majorClass.number+"&name="+this.majorClass.name).then(res=>{
              this.MajorClasses = res.data;
              if (Object.keys(this.MajorClasses).length == 0){
                alert("服务项目名称或编号错误");
                  this.getAll();
              }
            });
          },
        sayhi(){
          console.log(this.majorClass.name);
          console.log(this.majorClass.number);
        }
      },
      created() {
        this.getAll();
      }
    }
</script>

<style scoped>

</style>
