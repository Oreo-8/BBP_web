<template>
  <div id="app">
    <index />
  </div>
</template>

<script>
// import NProgress from "nprogress";
import index from "./page/index";
export default {
  name: "App",
  components: {
    index,
  },
  data() {
    return {};
  },
  created() {
    // NProgress.start();
  },
};
</script>
<style>
</style>
