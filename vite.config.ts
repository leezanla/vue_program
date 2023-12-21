import {ConfigEnv, defineConfig, loadEnv} from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
// 引入svg需要使用用到的插件
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";

// https://vitejs.dev/config/
export default defineConfig(({command, mode}: ConfigEnv) => {
    // 获取各种条件下的对应的变量
    let env = loadEnv(mode, process.cwd());
    return {
        plugins: [
            vue(),
            createSvgIconsPlugin({
                // Specify the icon folder to be cached
                iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
                // Specify symbolId format
                symbolId: "icon-[dir]-[name]"
            })
        ],
        resolve: {
            extensions: [".ts", ".js", ".vue", ".json", ".scss"],
            alias: {
                "@": path.resolve(__dirname, "src")
            }
        },
        // scss全局变量的配置
        css: {
            preprocessorOptions: {
                scss: {
                    javascriptEnabled: true,
                    additionalData: "@import \"./src/styles/variable.scss\";"
                }
            }
        },
        // 配置代理跨域
        server: {
            // proxy: {
            //     "/api": {
            //         target: "http://localhost:80",
            //         changeOrigin: true,
            //         rewrite: (path) => path.replace(/^\/api/, "")
            //     }
            // }
            proxy: {
                [env.VITE_APP_BASE_API]: {
                    target: env.VITE_SERVE,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, "")
                }
            }
        }
    };
});
