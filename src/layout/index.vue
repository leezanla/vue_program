<script setup lang="ts">
import {useRoute} from "vue-router";
import Logo from "@/layout/logo/index.vue";
import Menu from "@/layout/menu/index.vue";
import Main from "@/layout/main/index.vue";
import Tabber from "@/layout/tabbar/index.vue";
import useUserStore from "@/store/module/user.ts";
import useLayoutSettingStore from "@/store/module/setting.ts";

let $route = useRoute();
let userStore = useUserStore();
let layoutSettingStore = useLayoutSettingStore();
</script>

<template>
    <div class="layout_container">
        <!--    左侧菜单-->
        <div class="layout_slider" :class="{fold:layoutSettingStore.fold}">
            <Logo></Logo>
            <!--滚动组件-->
            <el-scrollbar class="scrollerbar">
                <el-menu :collapse="layoutSettingStore.fold" :default-active="$route.path" background-color="#001529"
                         text-color="white">
                    <Menu :menuList="userStore.menuRoutes"></Menu>
                </el-menu>
            </el-scrollbar>
        </div>
        <!--    顶部导航-->
        <div class="layout_tabber" :class="{fold:layoutSettingStore.fold}">
            <Tabber></Tabber>
        </div>
        <!--    内容展示区-->
        <div class="layout_main" :class="{fold:layoutSettingStore.fold}">
            <Main></Main>
        </div>
    </div>
</template>

<style scoped lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;


    .layout_slider {
        width: $base-menu-width;
        height: 100vh;
        background-color: $base-menu-background;
        transition: all .3s;

        .scrollerbar {
            width: 100%;
            height: calc(100vh - $base-menu-logo-height);
        }

        &.fold {
            width: $base-menu-min-width;
        }
    }

    .layout_tabber {
        position: fixed;
        top: 0;
        left: $base-menu-width;
        width: calc(100% - $base-menu-width);
        height: $base-tabber-height;
        transition: all .3s;

        &.fold {
            left: $base-menu-min-width;
            width: calc(100% - $base-menu-min-width);
        }
    }

    .layout_main {
        position: absolute;
        left: $base-menu-width;
        top: $base-tabber-height;
        width: calc(100% - $base-menu-width);
        height: calc(100vh - $base-tabber-height);
        background-color: yellow;
        padding: 20px;
        overflow: auto;
        transition: all .3s;

        &.fold {
            left: $base-menu-min-width;
            width: calc(100% - $base-menu-min-width);
        }
    }
}
</style>