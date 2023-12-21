<script setup lang="ts">
import {User, Lock} from "@element-plus/icons-vue";
import {reactive, ref} from "vue";
import {useRouter, useRoute} from "vue-router";
// 引入用户仓库
import useUserStore from "@/store/module/user.ts";

import {ElNotification} from "element-plus";
import {getTime} from "@/utils/getTime.ts";

// 定义一个加载的
let loading = ref(false);
let $router = useRouter();
let $route = useRoute();
let userStore = useUserStore();

const loginForm = reactive({
    username: "admin",
    password: "123456"
});

// 校验表单项
let loginForms = ref();

const login = async () => {
    // 保证所有的表单项都校验成功了再发送请求
    await loginForms.value.validate();
    // console.log(loginForms.value);
    loading.value = true;
    /*
    * 点击登录按钮以后干什么
    *   通知仓库登录请求
    *       请求成功->首页展示数据的地方
    *       请求失败->弹出登录失败的信息
    * */
    // 这个可以书写.then, 不过这里面使用的是try catch语法
    try {
        // 保证登录成功
        await userStore.userLogin(loginForm);
        // 编程式导航跳转到展示数据首页
        // 判断登陆的时候是否有query参数，如果有，就有query参数跳转
        let redirect:any = $route.query.redirect;
        // console.log($route.query.redirect);
        // 如果没有就往首页设置
        await $router.push({path: redirect || "/"});
        // console.log("username",userStore.username);
        ElNotification({
            type: "success",
            message: "登录成功",
            // 时间
            title: userStore.username + getTime()
        });
        // 登录失败，加载效果关闭
        loading.value = false;

    } catch (error) {
        // 登录失败的提示信息
        console.log(error);
        ElNotification({
            type: "error",
            message: (error as Error).message
        });
        loading.value = false;
    }
};

// 自定义校验规则函数
const validateUserName = (rule: any, value: any, callback: any) => {
    // rule：即为校验规则对像
    // value: 即为表单元素文本内容
    // callback: 函数，如果符合条件，callback旅行通过
    // 如果不符合条件也调用callback方法，注入错误提示信息
    if (value.length >= 3 && value.length <= 16) {
        callback();
    } else {
        callback(new Error("账号长度大于3小于16"));
    }
};
const validatePassword = (rule: any, value: any, callback: any) => {
  if (value.length >= 6 && value.length <= 16) {
        callback();
    } else {
        callback(new Error("密码长度大于6小于16"));
    }
}
// 定义表单的规则
const rules = {
    username: [
        // trigger：触发校验表单的时机，change->字数改变    blur->失去焦点
        // {required: true, message: "请输入用户名", trigger: "blur"},
        // {min: 3, max: 10, message: "用户名最少两位，最多十位", trigger: "blur"}
        // 自定义校验规则
        {validator: validateUserName, trigger: "blur"}
    ],
    password: [
        // {required: true, message: "请输入密码", trigger: "blur"},
        // {min: 6, max: 16, message: "用户名最少6位，最多16位", trigger: "blur"}
        // 自定义校验规则
        {validator: validatePassword, trigger: "blur"}

    ]
};

</script>

<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login_item" :model="loginForm" :rules="rules" ref="loginForms">
                    <h1>Hello</h1>
                    <h2>欢迎</h2>
                    <el-form-item prop="username">
                        <el-input class="input_item" type="text" placeholder="请输入账号"
                                  :prefix-icon="User" v-model="loginForm.username"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input class="input_item" type="password" placeholder="请输入密码"
                                  :prefix-icon="Lock" v-model="loginForm.password" show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button :loading="loading" class="login_btn input_item" color="skyblue"
                                   @keydown.enter="login" @click="login">
                            登录
                        </el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped lang="scss">
.login_container {
    width: 100%;
    height: 100vh;
    background: url("@/assets/images/background.jpg") no-repeat;
    background-size: cover;

    .login_item {
        margin-top: 30%;
        width: 50%;

        .input_item {
            margin-top: 20px;
        }

        h1 {
            color: white;
            font-size: 40px;
        }

        h2 {
            color: white;
            font-size: 20px;
            margin: 20px;
        }

        .login_btn {
            width: 100%;
        }

    }
}
</style>