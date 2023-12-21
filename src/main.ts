import {createApp} from "vue";
import App from "./App.vue";
// svg插件需要配置的代码
import "virtual:svg-icons-register";

// 引入自定义插件对象：注册整个项目全局组件
import globalComponent from "@/components/index.ts";

// 引入模板的全局样式
import "@/styles/index.scss";

// 引入ElementPlus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// import zhCn from "element-plus/lib/locale";

// 引入路由
import router from "@/router";

import pinia from "@/store";

import VueCookies from "vue3-cookies";

// 引入路由签权
import './permisstion.ts'

const app = createApp(App);
app.use(globalComponent);

app.use(ElementPlus);
// 使用路由
app.use(router);

app.use(pinia);

app.use(VueCookies);
app.mount("#app");
