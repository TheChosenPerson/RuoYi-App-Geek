<template>
  <view class="content">
    <image class="logo" src="@/static/logo.png"></image>
    <view class="text-area">
      <text class="title">Hello RuoYi-Vue</text>
    </view>
    <view class="text-area">
      <up-text type="primary" text="uview-plus"></up-text>
    </view>
    <view class="charts-box">
      <qiun-data-charts type="column" :chartData="chartData" />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      chartData: {},
    };
  },
  onReady() {
    this.getServerData();
  },
  methods: {
    getServerData() {
      //模拟从服务器获取数据时的延时
      setTimeout(() => {
        let res = {
          categories: ["2016", "2017", "2018", "2019", "2020", "2021"],
          series: [
            {
              name: "目标值",
              data: [35, 36, 31, 33, 13, 34]
            },
            {
              name: "完成量",
              data: [18, 27, 21, 24, 6, 28]
            }
          ]
        };
        this.chartData = JSON.parse(JSON.stringify(res));
      }, 500);
    },
  }
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

.charts-box {
  width: 100%;
  height: 300px;
}
</style>
