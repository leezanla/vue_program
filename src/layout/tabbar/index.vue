<script setup lang="ts">
import BreadCrumb from "@/layout/tabbar/breadcrumb/index.vue"
import Setting from "@/layout/tabbar/setting/index.vue"

</script>

<template>
    <div class="tabbar">
        <BreadCrumb></BreadCrumb>
        <Setting></Setting>
    </div>
</template>

<style scoped lang="scss">
.tabbar {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    background-image: linear-gradient(to right, rgb(232, 223, 223), skyblue, rgb(232, 223, 223));
}
</style>