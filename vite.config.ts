import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
// 引入svg需要使用用到的插件
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";

// https://vitejs.dev/config/
export default defineConfig({
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
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:80",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, "")
            }
        }
    }
});
