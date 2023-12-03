<template>
  <view style="height: 200rpx;background-color: skyblue;"></view>
  <view>
    <u--form labelPosition="left" :model="form" :rules="rules" ref="form1" :labelWidth="120"
      :labelStyle="{ paddingLeft: '40rpx' }">
      <u-form-item label="姓名" prop="name" borderBottom required>
        <u--input v-model="form.name" border="none" placeholder="请输入姓名" />
      </u-form-item>

      <u-form-item label="性别" prop="sex" borderBottom @click="showSex = true">
        <u--input v-model="form.sex" disabled disabledColor="#ffffff" placeholder="请选择性别" border="none"
          suffixIcon="arrow-right" />
      </u-form-item>

      <u-form-item label="年龄" prop="age" borderBottom required>
        <u--input v-model="form.age" border="none" placeholder="请输入年龄" />
      </u-form-item>

      <u-form-item label="手机号" prop="phone" borderBottom required>
        <u--input v-model="form.phone" border="none" placeholder="请输入手机号" />
      </u-form-item>

      <u-form-item label="服务单位" prop="service" borderBottom required>
        <u--input v-model="form.service" disabled disabledColor="#ffffff" placeholder="请选择性别" border="none"
          suffixIcon="arrow-right" />
      </u-form-item>

      <u-form-item label="从业年数" prop="years" borderBottom required>
        <u--input v-model="form.years" border="none" placeholder="请输入从业年数" />
      </u-form-item>

      <u-form-item label="维修专长" prop="profession" borderBottom required>
        <view @click="showSex = true">
          <u--input disabled disabledColor="#ffffff" placeholder="添加" border="none" prefixIcon="plus-circle" />
        </view>
      </u-form-item>

      <u-form-item label="服务地区" prop="region" borderBottom required>
        <view @click="show.region = true">
          <u--input disabled disabledColor="#ffffff" placeholder="添加" border="none" prefixIcon="plus-circle" />
        </view>
      </u-form-item>

      <u-form-item label="居住地址" prop="address" borderBottom required>
        <u--input v-model="form.address" border="none" placeholder="请输入居住地址" />
      </u-form-item>

      <u-form-item label="身份证号" prop="id_number" borderBottom required>
        <u--input v-model="form.id_number" border="none" placeholder="请输入身份证号" />
      </u-form-item>

      <u-form-item label="支付宝账户" prop="alipay" borderBottom required>
        <u--input v-model="form.alipay" border="none" placeholder="请输入支付宝账户" />
      </u-form-item>

      <u-form-item label="身份证上传" prop="id_card" borderBottom required>
        <u--input v-model="form.id_card" disabled disabledColor="#ffffff" placeholder="请选择性别" border="none"
          suffixIcon="arrow-right" />
      </u-form-item>

      <u-form-item label="人脸识别" prop="face" borderBottom required>
        <u--input v-model="form.face" disabled disabledColor="#ffffff" placeholder="请选择性别" border="none"
          suffixIcon="arrow-right" />
      </u-form-item>

      <u-form-item label="技能证书上传" prop="skill" borderBottom>
        <u--input v-model="form.skill" disabled disabledColor="#ffffff" placeholder="请选择性别" border="none"
          suffixIcon="arrow-right" />
      </u-form-item>
    </u--form>
    <u-action-sheet :show="show.sex" :actions="options.sex" title="请选择性别" @close="show.sex = false" @select="sexSelect" />
    <u-action-sheet :show="show.unit" :actions="options.unit" title="请选择单位" @close="show.unit = false"
      @select="unitSelect" />
    <u-city-select v-model="show.region" @city-change="citySelect" />
  </view>
</template>

<script setup>
import { reactive } from 'vue';
import { ref, onMounted } from 'vue';

const form = reactive({
  name: '',
  sex: '',
  age: '',
  phone: '',
  service: '',
  years: '',
  profession: '',
  region: '',
  address: '',
  id_number: '',
  alipay: '',
  id_card: '',
  face: '',
  skill: ''
})
const rules = reactive({

})
const show = reactive({
  sex: false,
  unit: false,
  region: false
})
const options = reactive({
  sex: [{ name: '男' }, { name: '女' }],
  unit: [
    { name: "济南产晏太阳能有限公司" },
    { name: "济南一休太阳能有限公司" },
    { name: "济南荣源太阳能有限公司" },
    { name: "济南力瑞新能能源科技有限公司" },
    { name: "济南东狮设备安装有限公司" }
  ],
  profession: [
    { name: "普通太阳能" },
    { name: "壁挂太阳能" },
    { name: "分体式" },
    { name: "工程" },
    { name: "空气能" },
    { name: "电热水器" },
  ]
})
function sexSelect(e) {
  form.sex = e.name
}
function unitSelect(e) {
  form.unit = e.name
}
function citySelect(e) {
  form.region = e.province.label + '-' + e.city.label + '-' + e.area.label;
  //  e.province.value + '-' + e.city.value + '-' + e.area.value;
}

</script>

<style scoped lang="scss">
:deep(.u-form-item__body__left__content__required) {
  margin-left: 30rpx;
}
</style>
