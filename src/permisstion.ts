// 路由鉴权, 项目中的路由能不能被权限的设置（某一个路由什么条件下可以访问，什么条件不可以被访问）
import router from "@/router";
// 引入nprogress
import nprogress from "nprogress";
// 引入nprogress的样式
import "nprogress/nprogress.css";

import setting from "@/setting.ts";
// 根据用户的token，判断用户是否登录
import useUserStore from "@/store/module/user.ts";
// 在外面，如果想要使用小仓库的内容，还需要把大仓库引入进来
import pinia from "@/store";

let userStore = useUserStore(pinia);

// 全局前置守卫
router.beforeEach(async (to, from, next) => {
    // 修改标题
    document.title = `${setting.title}-${to.meta.title}`
    // to 你将要访问那个路由

    // from 你从那个路由而来

    // next 路由放行的函数
    nprogress.start();

    // 获取用户的名称
    let username = userStore.username;


    // 获取token，去判断用户登录还是未登录
    let token = userStore.token;
    if (token) {
        // 用户登录成功,就不能再访问，指向首页
        if (to.path == "/login") {
            next({path: "/"});
        } else {
            if (username) {
                // 有用户信息，放行
                next();
            } else {
                try {
                    // 没有用户信息，发送请求再放行
                    await userStore.userInfo();
                    next();
                } catch (error) {
                    // token过期
                    // 用户手动修改本地的token
                    next({path: "/login", query: {redirect: to.path}});
                }
            }
        }

    } else {
        // 用户未登录
        if (to.path == "/login") {
            next();
        } else {
            next({path: "/login", query: {redirect: to.path}});
        }
    }
    next();
    // 访问某一个路由之前的守卫

});

// 全局后置守卫
router.afterEach((to, from, failure) => {
    nprogress.done();
});
/*
* 第一个问题：任意路由切换实现进度条业务
* 第二个问题：路由鉴权（路由组件访问权限的设置）
*
* */




