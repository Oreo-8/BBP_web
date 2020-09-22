<template>
  <a-modal :footer="null" :title="title" :visible="visible"></a-modal>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      title: "登陆",
    };
  },
};
</script>
<style scoped>
</style>