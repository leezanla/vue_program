export const constantRoute = [
    {
        name: "login", //命名路由
        path: "/login",
        component: () => import("@/view/login/index.vue"),
        meta: {
            title: "登录",
            hidden: true, // 代表路由是否隐藏
            icon: ""
        }
    },
    {
        name: "layout", //登录成功展示的数据
        path: "/",
        component: () => import("@/layout/index.vue"),
        meta: {
            title: "layout",
            hidden: false,
            icon: "Avatar" // 菜单图标
        },
        redirect: "/home",  // 直接重定向到二级
        children: [
            {
                path: "/home",
                component: () => import("@/view/home/index.vue"),
                meta: {
                    title: "首页",
                    hidden: false,
                    icon: "HomeFilled"
                }
            }
        ]
    },
    {
        name: "screen",
        path: "/screen",
        component: () => import("@/view/screen/index.vue"),
        meta: {
            title: "数据大屏",
            hidden: false,
            icon: "Platform"
        }
    },
    {
        name: "Acl",
        path: "/acl",
        component: () => import("@/layout/index.vue"),
        meta: {
            title: "权限管理",
            hidden: false,
            icon: "Lock"
        },
        redirect: "/acl/user",
        children: [
            {
                name: "User",
                path: "/acl/user",
                component: () => import("@/view/acl/user/index.vue"),
                meta: {
                    title: "用户管理",
                    hidden: false,
                    icon: "GoldMedal"
                }
            },
            {
                name: "Role",
                path: "/acl/role",
                component: () => import("@/view/acl/role/index.vue"),
                meta: {
                    title: "角色管理",
                    hidden: false,
                    icon: "User"
                }
            },
            {
                name: "Permission",
                path: "/acl/permission",
                component: () => import("@/view/acl/permission/index.vue"),
                meta: {
                    title: "菜单管理",
                    hidden: false,
                    icon: "Present"
                }
            }
        ]
    },
    {
        path: "/product",
        component: () => import("@/layout/index.vue"),
        name: "Product",
        meta: {
            title: "商品管理",
            icon: "Goods",
            hidden: false
        },
        redirect: "/product/trademark",
        children: [
            {
                path: "/product/trademark",
                component: () => import("@/view/product/trademark/index.vue"),
                name: "Trademark",
                meta: {
                    title: "品牌管理",
                    icon: "ShoppingCartFull",
                    hidden: false
                }
            },
            {
                path: "/product/attr",
                component: () => import("@/view/product/attr/index.vue"),
                name: "Attr",
                meta: {
                    title: "属性管理",
                    icon: "ReadingLamp",
                    hidden: false
                }
            },
            {
                path: "/product/sku",
                component: () => import("@/view/product/sku/index.vue"),
                name: "Sku",
                meta: {
                    title: "sku管理",
                    icon: "Basketball",
                    hidden: false
                }
            },
            {
                path: "/product/spu",
                component: () => import("@/view/product/spu/index.vue"),
                name: "Spu",
                meta: {
                    title: "spu管理",
                    icon: "MagicStick",
                    hidden: false
                }
            }
        ]
    },
    {
        name: "404",
        path: "/404",
        component: () => import("@/view/404/index.vue"),
        meta: {
            title: "404",
            hidden: true,
            icon: "HomeFilled"
        }
    },
    {
        name: "any",  //任意路由
        path: "/:pathMatch(.*)*",
        redirect: "/404",
        meta: {
            title: "任意路由",
            hidden: true,
            icon: "HomeFilled"
        }
    }
];