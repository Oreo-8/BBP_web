<template>
  <div>
    <a-dropdown placement="bottomLeft">
      <a-menu slot="overlay">
        <!-- v-fro 遍历 -->
        <a-menu-item key="1" @click="landedClick">
          <a-icon type="user" />登陆
        </a-menu-item>
      </a-menu>
      <a-avatar
        shape="square"
        size="large"
        :style="{ backgroundColor: color, verticalAlign: 'middle' }"
      >{{ avatarValue }}</a-avatar>
    </a-dropdown>
  </div>
</template>
<script>
const colorList = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];
export default {
  data() {
    return {
      avatarValue: "未登录",
      color: "#1890ff",
      visible: false,
      formInline: {
        user: "",
        password: "",
      },
    };
  },
  methods: {
    landedClick() {
      this.visible = true;
    },
  },
};
</script>