// 创建用户相关的小仓库
import {defineStore} from "pinia";
// 引入数据类型
import type {LoginFormData, LoginResponseData} from "@/api/user/type.ts";

import {reqLogin, reqUserInfo} from "@/api/user";
import {GET_TOKEN, REMOVE_TOKEN, SET_TOKEN} from "@/utils/tokens.ts";
// 引入路由（常量路由）
import {constantRoute} from "@/router/routes.ts";
import {UserState} from "@/store/module/types/types.ts";


// 创建用户小仓库
const useUserStore = defineStore("user", {
    // 小仓库存储数据地方
    state: (): UserState => {
        return {
            token: GET_TOKEN(), // 用户唯一标识token
            username: "",
            avatar: "",
            menuRoutes: constantRoute
        };
    },
    // 异步|逻辑的地方
    actions: {
        // 处理用户登录的方法
        async userLogin(data: LoginFormData) {
            // 登录请求
            let result: LoginResponseData = await reqLogin(data);
            console.log(result);
            // 登录请求：成功200 -> token
            if (result.status === 200) {
                // pinia仓库存储一下token
                // 由于pinia|vuex存储数据其实利用js对象，并没有持久化
                this.token = result.token;
                this.username = result.data.username;
                this.avatar = result.data.avatar;
                // 本地存储持久化一份
                SET_TOKEN(this.token);

                // 能保证当前async函数返回一个成功的promise
                return "ok";
            } else {
                // 登录请示：失败201 -> 登录失败错误的信息
                console.log(result.message);
                return Promise.reject(new Error(result.message));
            }

        },
        // 获取用户信息
        async userInfo() {
            // 获取用户信息进行存储在仓库[用户头像，用户名字]
            let result = await reqUserInfo();
            console.log(result);
            if (result.status == 200) {
                this.username = result.data.username;
                this.avatar = result.data.avatar;
                return "ok";
            } else {
                return Promise.reject("获取用户信息失败");
            }

        },
        // 退出登录
        userLogout() {
            // 目前没有接口：退出登录接口（通知服务器本地用户唯一标识失效）
            this.token = "";
            this.username = "";
            this.avatar = "";
            // 删除本地的token
            REMOVE_TOKEN();
        }
    },
    getters: {}
});
export default useUserStore;