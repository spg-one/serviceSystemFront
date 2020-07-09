<template>
  <div>
    <table class="table table-striped">
      <caption>
        服务商个人信息<hr>
      </caption>
      
      <thead>
        <tr>
          <th>角色</th>
          <th>姓名</th>
          <th>联系方式</th>
          <th>家庭住址</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ personalInfo.user_role }}</td>
          <td>{{ personalInfo.real_name }}</td>
          <td>{{ personalInfo.tell }}</td>
          <td>{{ personalInfo.address }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "PersonalInfo",
  data() {
    return {
      personalInfo: {}
    };
  },
  created() {
    this.$http.get("/api/home-page/personal-info").then(res => {
      this.personalInfo = res.data;
    });
  }
};
</script>
