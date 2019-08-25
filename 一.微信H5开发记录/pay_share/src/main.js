import Vue from 'vue'
import App from './App.vue'
// 引入axios,请求插件
import axios from 'axios';
// 引入VueAxios,将axios挂载到Vue上,可以在每个页面里通过this.axios发送请求,简化开发成本
// 如果没有VueAxios需要将每一个组件都引入axios，发送请求
import VueAxios from 'vue-axios';

Vue.config.productionTip = false

Vue.use(VueAxios.axios);
// axios全局请求拦截器
axios.interceptors.request.use(() => {
  // loading / 请求地址的替换/修改
});
axios.interceptors.response.use((response) => {
  let res = response.data;
  if (res.code !== 0) {
    // 业务代码错误处理
    alert(res.message);
  }
}, (err) => {
  //整个网络请求报错
  return Promise.reject(err);
});

new Vue({
  render: h => h(App),
}).$mount('#app')
