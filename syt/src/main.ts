// Vue3框架提供的createApp方法，可以用来创建应用实例方法
import { createApp } from 'vue'
// 引入清除默认样式
import '@/style/reset.scss'
// 引入根组件App
import App from './App.vue'
// 引入全局组件--顶部、底部都是全局组件
import HospitalTop from '@/components/hospital_top/index.vue'
// 利用createApp方法创建应用实例
const app = createApp(App)
app.component('HospitalTop', HospitalTop)
// 将应用实例挂载到挂载点上
app.mount('#app')
