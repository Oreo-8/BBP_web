<template>
  <div class="mainindex" ref="mainindex">
    <div
      class="back"
      v-bind:style="{backgroundImage:'url(' + bg + ')',
        backgroundSize:'contain',backgroundRepete:'no-repete',
        backgroundSize:'cover',backgroundPosition:'center center'}"
    >
      <p class="typing" v-show="false">BlueBerryPie</p>
      <div class="arrow">
        <a-button type="primary" shape="circle" size="large" @click="upPronbit">
          <a-icon type="down" />
        </a-button>
      </div>
    </div>

    <div id="pronbit" ref="pronbit">
      <!-- 内容 -->
      <my-list :pagination="pagination" :listData="listData" />
    </div>
  </div>
</template>
<script>
import myList from "../../components/list";
import { getBlogPage } from "../../api/main";
export default {
  name: "bmain",
  components: {
    myList,
  },
  data() {
    return {
      bg: require("../../assets/image4.png"),
      pagination: {
        onChange: (page) => {
          this.pagination.current = page;
          this.getDataList();
        },
        pageSize: 10,
        total: 0,
        current: 1,
      },

      listData: [],
    };
  },
  methods: {
    upPronbit() {
      this.$refs.pronbit.scrollIntoView({
        behavior: "smooth", // 平滑过渡
        block: "start", // 上边框与视窗顶部平齐。默认值
      });
    },

    getDataList(key = "up") {
      getBlogPage({
        size: this.pagination.pageSize,
        current: this.pagination.current,
      }).then((r) => {
        this.pagination.total = r.data.total;
        this.pagination.pageSize = r.data.size;
        this.pagination.current = r.data.current;
        this.listData = r.data.records;
        if (key == "up") {
          this.upPronbit();
        }
      });
    },
  },
  mounted() {
    getBlogPage({
      size: this.pagination.pageSize,
      current: this.pagination.current,
    }).then((r) => {
      this.pagination.total = r.data.total;
      this.pagination.pageSize = r.data.size;
      this.pagination.current = r.data.current;
      this.listData = r.data.records;
    });
  },
};
</script>
<style scoped>
.card-child {
  padding-left: 10px;
  padding-right: 10px;
}
.back {
  height: calc(100vh - 67px) !important;
  width: 100%;
  position: relative;
  /* background-image: url("../../assets/image2.png") no-repeat center top */
}
.typing {
  color: #1890ff;
  font-size: 250%;
  font-style: italic;
  width: 6.8em;
  height: 1.5em;
  border-right: 1px solid transparent;
  animation: typing 3.5s steps(14, end), blink-caret 0.75s step-end infinite;
  font-family: Consolas, Monaco;
  word-break: break-all;
  overflow: hidden;
  margin: auto;
  position: absolute;
  top: 0;
  left: 10px;
  bottom: 250px;
  right: 0;
}
/* 打印效果 */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 7em;
  }
}
/* 光标闪啊闪 */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: currentColor;
  }
}

.arrow {
  margin: auto;
  position: absolute;
  bottom: 10%;
  left: 51%;
  transform: translate(-50%, -50%);
  text-align: center;
  margin-left: -1%;
  animation-name: beat;
  /*动画名称*/
  animation-duration: 0.7s;
  /*设置秒数*/
  animation-timing-function: linear;
  /*速度曲线*/
  animation-iteration-count: infinite;
  /*播放次数*/
  animation-direction: alternate;
  /*逆向播放*/
  animation-play-state: running;
  /*正在运行*/
}

@keyframes beat {
  0% {
    bottom: 5%;
  }

  100% {
    bottom: 8%;
  }
}

.arrow a-button {
  width: 30px;
}

#pronbit {
  background-color: #231f20;
  padding-top: 70px;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
}
.mainindex {
  background-color: #231f20;
}
</style>