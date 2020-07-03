<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import Banner from "./components/common/Banner";
import "view-design/dist/styles/iview.css";
export default {
  name: "App",
  components: {
    Banner
  }
};
</script>
<style>
.onetable {
  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;
  width: 85%;
}

caption {
  color: #41c7db;
}

.btnGroup {
  display: flex;
  align-content: space-around;
  text-decoration: underline;
  color: #41c7db;
}
.btnGroup :hover {
  cursor: pointer;
}
</style>
