<script setup lang="ts">

import {FullScreen, Refresh, Setting} from "@element-plus/icons-vue";
import useLayoutSettingStore from "@/store/module/setting.ts";
import useUserStore from "@/store/module/user.ts";
import {useRouter, useRoute} from "vue-router";

let layoutSettingStore = useLayoutSettingStore();
let userStore = useUserStore();
let $router = useRouter();
let $route = useRoute();

const updateRefresh = () => {
    layoutSettingStore.refresh = !layoutSettingStore.refresh;
};
// 退出登陆点击的回调
const logout = () => {
    // 第一件事件：需要向服务器发请求【退出登录接口】
    // 第二件事情：仓库当中关于用于相差的数据清空【token | username | avatar】
    userStore.userLogout();
    console.log($route);
    // 第三件事件：跳转到登录页面
    $router.push({
        path: "/login",
        query: {
            redirect: $route.path
        }
    })
};

/*全屏按钮点击的回调*/
const fullScreen = () => {
    //document.fullscreenElement判断当前是否为全屏
    // console.log(document.fullscreenElement);
    // 定义一个变量，用来判断当前是不是全屏模式
    let full = document.fullscreenElement;

    // 切换为全屏模式
    if (!full) {
        // 利用文档根节点的方法，requestFullscreen，实现全屏模式
        document.documentElement.requestFullscreen();
    } else {
        // 退出全屏模式
        document.exitFullscreen();
    }

};
</script>

<template>
    <div class="tabbar_right">
        <el-button size="small" :icon="Refresh" circle @click="updateRefresh"></el-button>
        <el-button size="small" :icon="FullScreen" circle @click="fullScreen"></el-button>
        <el-button size="small" :icon="Setting" circle></el-button>
        <img :src="userStore.avatar" alt="" style="height: 24px; width: 24px; margin: 0 10px">
        <el-dropdown>
                <span class="el-dropdown-link">
                    {{ userStore.username }}
                    <el-icon class="el-icon--right">
                        <arrow-down/>
                    </el-icon>
                </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item @click="logout">退出登陆</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<style scoped lang="scss">
.tabbar_right {
    display: flex;
    align-items: center;
}
</style>