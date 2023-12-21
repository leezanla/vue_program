import SvgIcon from "@/components/SvgIcon/index.vue";
import Pagination from "@/components/Pagination/index.vue";
import {App, defineComponent} from "vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const allGlobalComponent: Record<string, any> = {SvgIcon, Pagination};
// 插件，对外暴露插件对象
export default {
    // 务必叫install
    install(app: App) {
        // 注册为全局组件
        Object.keys(allGlobalComponent).forEach((item: string): void => {
            const component = defineComponent(allGlobalComponent[item]);
            app.component(item, component);
        });
        // 将element-plus提供的图标注册为全局组件
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component);
        }
    }
};
