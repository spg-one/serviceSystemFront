<template>
  <router-view/>
</template>

<script>
import 'view-design/dist/styles/iview.css';
export default {
  name: 'App'
}
</script>
<style>

.onetable{
  margin-top: 5rem;
  margin-left:auto;
  margin-right:auto;
  width: 85%;
}

caption{
  color: #41C7DB;
}

.btnGroup{
  display: flex;
  align-content: space-around;
  text-decoration: underline;
  color:#41C7DB;
}
.btnGroup :hover{
  cursor: pointer;
}
</style>