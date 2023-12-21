<script setup lang="ts">
import request from "@/utils/request.ts";

const sendData = () => {
    request.get("/user/test")
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error.message);
        })
}
</script>

<template>
    <div>我是一级路由home</div> <button @click="sendData">点击我发送数据</button>
</template>

<style scoped lang="scss">

</style>