<script setup lang="ts">
import useLayoutSettingStore from "@/store/module/setting.ts";
import {nextTick, ref, watch} from "vue";

let layoutSettingStore = useLayoutSettingStore();

// 控制当前组件是否销毁
let flag = ref(true);
// 监听仓库内部数据是否发生变化，如果发生变化，说明用户点击过刷新按钮
watch(() => layoutSettingStore.refresh, () => {
    flag.value = false;
    nextTick(() => {
        flag.value = true;
    });
});

</script>

<template>
    <router-view v-slot="{ Component }">
        <transition name="fade">
            <component :is="Component" v-if="flag"/>
        </transition>
    </router-view>
</template>

<style scoped lang="scss">
.fade-enter-from {
    opacity: 0;
    transform: scale(0);
}

.fade-enter-active {
    transition: all .5s;
}

.fade-enter-to {
    opacity: 1;
    transform: scale(1);
}
</style>