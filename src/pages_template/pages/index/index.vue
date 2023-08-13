<template>
  <uni-section class="mb-10" title="数值板" sub-title="statistic" type="line"></uni-section>
  <u-row gutter="0">
    <u-col span="6">
      <statistic label="订单数量(个)" labelColor="#1f1f1f" number="0" numberColor="red" />
    </u-col>
    <u-col span="6">
      <statistic label="交易金额(元)" labelColor="#1f1f1f" number="0" numberColor="red" />
    </u-col>
  </u-row>

  <uni-section class="mb-10" title="圆形菜单" sub-title="circle-menu" type="line"></uni-section>
  <u-row>
    <u-col :span="2.1" :offset="0.3" v-for="menu, index in menus" :key="index">
      <circleMenu :icon="menu.icon" :label="menu.label" :size="60" @click="modal.msg(menu.label)"></circleMenu>
    </u-col>
  </u-row>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import circleMenu from '../../components/circle-menu'
import statistic from '../../components/statistic.vue';
import modal from '@/plugins/modal.js'


// 菜单板块
const menus = reactive(
  [
    { icon: "/static/images/icon/rocket.png", label: '抢单' },
    { icon: "/static/images/icon/phone.png", label: '回访' },
    { icon: "/static/images/icon/message.png", label: '消息' },
    { icon: "/static/images/icon/dialogue.png", label: '公告' },
    { icon: "/static/images/icon/knowledge.png", label: '知识库' }
  ]);
</script>

<style lang="scss" scoped></style>
