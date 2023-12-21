<script setup lang="ts">
import {useRouter} from "vue-router";

let props = defineProps(["menuList"]);

let $router = useRouter();
const goRouter = (vc: any) => {
    $router.push(vc.index);
};


</script>
<script lang="ts">
export default {
    name: "Menu"
};
</script>

<template>
    <template v-for="(item, index) in menuList" :key="item.path">
        <!--没有子路由-->
        <template v-if="!item.children">
            <el-menu-item :index="item.path" v-if="!item.meta.hidden" @click="goRouter">
                <el-icon>
                    <Component :is="item.meta.icon"></Component>
                </el-icon>
                <template #title>
                    <span>{{ item.meta.title }}</span>
                </template>
            </el-menu-item>
        </template>

        <!--有子路由且只有一个-->
        <template v-if="item.children && item.children.length == 1">
            <el-menu-item :index="item.children[0].path" v-if="!item.children[0].meta.hidden" @click="goRouter">
                <el-icon>
                    <Component :is="item.children[0].meta.icon"></Component>
                </el-icon>
                <template #title>
                    <span>{{ item.children[0].meta.title }}</span>
                </template>
            </el-menu-item>
        </template>

        <!--有子路由且大于一个-->
        <el-sub-menu :index="item.path" v-if="item.children && item.children.length > 1">
            <template #title>
                <el-icon>
                    <Component :is="item.meta.icon"></Component>
                </el-icon>
                <span>{{ item.meta.title }}</span>
            </template>

            <!--递归组件-->
            <Menu :menu-list="item.children"></Menu>
        </el-sub-menu>
    </template>
</template>

<style scoped lang="scss">

</style>