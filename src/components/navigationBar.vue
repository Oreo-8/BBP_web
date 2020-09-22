<template>
  <div id="my-bar">
    <a-menu v-model="current" mode="horizontal" theme="dark" :selectable="false">
      <a-menu-item v-for="(item,index) in data" :key="index" @click="itemClick(item)">
        <a-icon :type="item.icon" />
        {{item.name}}
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
import { getRoutes } from "../api/base";
export default {
  props: {},
  data() {
    return {
      current: [],
      data: [],
    };
  },
  methods: {
    itemClick(obj) {
      this.$router.push(obj.routeName);
      // console.log(obj);
    },
    refresh() {
      getRoutes().then((r) => {
        this.data = r.data;
        // r.data.forEach(i=>{
        // })
      });
    },
  },
  mounted() {
    this.refresh();
  },
};
</script>
<style scoped>
</style>