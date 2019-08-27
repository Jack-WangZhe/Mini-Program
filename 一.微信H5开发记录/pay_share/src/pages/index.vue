<template>
  <div class="index">
    <img src="./../assets/img/header.png" class="header" alt />
    <div class="btn-group">
      <button class="btn">分享</button>
      <button class="btn btn-primary">充值</button>
      <button class="btn">活动详情</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {};
  }
};
</script>
<style>
.index {
    background-color: #ffc93a;
    height: 100vh;
}
.btn-group {
    text-align: center;
    padding-top: .34rem;
}
</style>