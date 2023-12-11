import SvgIcon from "@/components/SvgIcon/index.vue";
import Pagination from "@/components/Pagination/index.vue";
import {App} from "vue";

const allGlobalComponent = {SvgIcon, Pagination};
// 插件，对外暴露插件对象
export default {
    // 务必叫install
    install(app: App) {
        // 注册为全局组件
        Object.keys(allGlobalComponent).forEach((item: string): void => {
            app.component(item, allGlobalComponent[item]);
        });
    }
};