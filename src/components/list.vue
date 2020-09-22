<template>
  <!-- 内容 -->
  <a-card class="card-child" title="主页" :bordered="true" :hoverable="true">
    <a-list
      class="all-list"
      :bordered="true"
      item-layout="vertical"
      :pagination="pagination"
      :data-source="listData"
    >
      <a-list-item slot="renderItem" key="item.id" slot-scope="item, index">
        <template slot="actions">
          <span>
            <a-icon type="calendar" />
            {{ item.createTime | formatDate}}
          </span>
          <span>
            <a-icon type="eye" />
            {{ item.views}}
          </span>
          <span>
            <a-icon type="message" />
            {{ item.discussCount}}
          </span>
          <a-button v-if="showDel" type="link" icon="delete" size="small">删除</a-button>
        </template>
        <img
          slot="extra"
          width="272"
          alt="logo"
          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
        />
        <a-list-item-meta>
          <a slot="title" :href="item.id">{{ item.userName }}</a>
          <a-avatar slot="avatar" :src="item.imagePath" />
        </a-list-item-meta>
        <div>{{ item.title }}</div>
        <div style="margin-top: 10px;">
          <a-tag color="blue" v-for="i in item.tags">{{i.name}}</a-tag>
        </div>
      </a-list-item>
    </a-list>
  </a-card>
</template>
<script>
export default {
  name: "mylist",
  filters: {
    formatDate(i) {
      return i.split("T").join(" ");
    },
  },
  props: {
    pagination: {
      type: Object,
      default: () => {
        return {};
      },
    },
    listData: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      showDel: true,
      actions: [
        { type: "calendar", text: "createTime" },
        { type: "eye", text: "views" },
        { type: "message", text: "discussCount" },
        { type: "delete", text: "" },
      ],
    };
  },
};
</script>
<style scoped>
.card-child {
  padding-left: 10px;
  padding-right: 10px;
}
</style>