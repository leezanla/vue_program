<script setup lang="ts">
// 引入设置标题与logo配置文件
import setting from "@/setting.ts";
</script>

<template>
    <div class="logo" v-if="setting.logoHidden">
        <img :src="setting.logo" alt="logo">
        <p>{{ setting.title }}</p>
    </div>
</template>

<style scoped lang="scss">
.logo {
    width: 100%;
    height: $base-menu-logo-height;
    color: white;
    display: flex;
    align-items: center;
    margin-left: 15px;
    img {
        width: 30px;
        height: 30px;
    }

    p {
        font-size: $base-logo-title-fontSize;
        margin-left: 20px;
    }
}
</style>