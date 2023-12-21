<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";

import {ArrowRight} from "@element-plus/icons-vue";
import useLayoutSettingStore from "@/store/module/setting.ts";
import router from "@/router";


let layoutSettingStore = useLayoutSettingStore();
let $route = useRoute();
let $router = useRouter();
const goWantToPath = (path) => {
    console.log(path);
    router.push(path)
}
</script>

<template>
    <div class="tabbar_left">
        <el-icon style="margin-right: 20px; vertical-align: middle" @click="layoutSettingStore.changeFold()">
            <Component :is="layoutSettingStore.fold ? 'Fold' : 'Expand'"></Component>
        </el-icon>
        <!--    左侧面包屑-->
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="item.path">
                <!--图标-->
                <Component :is="item.meta.icon" class="tabber_img"></Component>
                <!--标题-->
                <!--<span>{{ item.meta.title }}</span>-->
                <!--<a :href="item.path">{{item.meta.title}}</a>-->
                <button @click="goWantToPath(item.path)">{{item.meta.title}}</button>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<style scoped lang="scss">
.tabbar_left {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;

    .tabber_img {
        width: 16px;
        height: 16px;
        margin-right: 5px;
    }
}
</style>