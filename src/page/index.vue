<template>
  <div id="mainindex">
    <a-layout>
      <a-affix :offset-top="top">
        <a-layout-header class="i-header">
          <a-row style="height: 100%;">
            <a-col class="col-1" :span="12">
              <a-row style="height: 100%;">
                <a-col class="col-2" :span="8"></a-col>
                <a-col class="col-2" :span="16">
                  <span class="title">BlueBerryPie</span>
                </a-col>
              </a-row>
            </a-col>
            <a-col class="col-2" :span="8">
              <!-- 菜单 -->
              <navigation-bar class="n-bar" />
            </a-col>
            <a-col class="col-2" :span="4">
              <!-- 头像菜单 -->
              <avatar-menu class="amenu" />
            </a-col>
          </a-row>
        </a-layout-header>
      </a-affix>

      <a-layout-content>
        <!-- 主体 -->
        <keep-alive>
          <router-view />
        </keep-alive>
        <!-- <div style="height:1000px" /> -->
        <!-- <main-index /> -->
        <!-- 回到顶部 -->
        <a-back-top />
      </a-layout-content>
      <!-- 尾部 域名认证 -->
      <a-layout-footer style="text-align:center" class="footer">
        <span>网站备案号 粤ICP备20042291号</span>
        <div>
          ©版权所有 BlueberryPie_ALL
          <span>
            &nbsp;|
            <a href="https://space.bilibili.com/13360227" target="_blank">BiliBili</a>
          </span>
          <span>
            &nbsp;|
            <a href="https://github.com/Oreo-8" target="_blank">Github</a>
          </span>
        </div>
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<script>
import navigationBar from "@/components/navigationBar";
import avatarMenu from "@/components/avatarMenu";
import mainIndex from "../page/main/index";
export default {
  components: {
    navigationBar,
    avatarMenu,
    mainIndex,
  },
  data() {
    return {
      top: 0,
      src: require("../assets/logo.png"),
    };
  },
  methods: {},
  created() {},
  mounted() {},
  updated() {},
};
</script>
<style scoped>
.i-header {
  padding: 0;
}
.col-1 {
  height: 100%;
}
.col-2 {
  height: 100%;
  position: relative;
}
.n-bar {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.title {
  color: #1890ff;
  font-style: italic;
  font-size: 115%;
}

.title:hover {
  cursor: pointer;
}
.footer {
  background-color: #231f20;
  color: #fff;
}
</style>