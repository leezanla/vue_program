import { createApp } from "vue";
import App from "./App.vue";
// svg插件需要配置的代码
import "virtual:svg-icons-register";

const app = createApp(App);

// 引入自定义插件对象：注册整个项目全局组件
import globalComponent from "@/components/index.ts";

// 引入模板的全局样式
import "@/styles/index.scss";

app.use(globalComponent);

app.mount("#app");
