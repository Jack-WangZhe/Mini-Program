import Vue from 'vue';
import Router from 'vue-router';
import index from '../pages/index.vue'
import pay from '../pages/pay.vue'
import activity from '../pages/activity.vue'

//使用Vue.use()使用插件
Vue.use(Router);

const routes = [
    {
        path: '/index',
        name: 'index',
        component: index,//表示加载/index时,加载index组件
        meta: {title: '首页'}//元数据，针对页面存储数据
    },
    {
        path: '/pay',
        name: 'pay',
        component: pay,
        meta: {title: '充值'}
    },
    {
        path: '/activity',
        name: 'activity',
        component: activity,
        meta: {title: '活动'}
    }
]

const router = new Router({
    routes //初始化定义的路由
})

export default router;