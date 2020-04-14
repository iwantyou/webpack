import AsyncComponent from "component/asyncCompont/index"

const Layout = AsyncComponent(() => import("../page/layout"))

const Login = AsyncComponent(() => import("../page/login"))

const Web = AsyncComponent(() => import("../page/web"))

const User = AsyncComponent(() => import("../page/user"))

const Rule = AsyncComponent(() => import("../page/rule"))

const Web1 = AsyncComponent(() => import("../page/web1"))

export const routes = [
    {
        path: "/layout",
        component: Layout,
        redirect: "/layout/web",
        routes: [
            {
                name: "主页1",
                path: "/layout/web",
                exact: true,
                requireAuth: false,
                component: Web
            },
            {
                name: "主页2",
                path: "/layout/web1",
                exact: true,
                requireAuth: false,
                component: Web1
            },
            {
                name: "规则",
                path: "/layout/rule",
                icon: "icon-guize",
                exact: true,
                requireAuth: true,
                component: Rule
            },
            {
                name: "用户",
                path: "/layout/user/:id",
                icon: "icon-yonghu",
                exact: true,
                requireAuth: false,
                component: User
            },
        ],
    },
    {
        name: "登陆",
        path: "/login",
        exact: true,
        component: Login,
    },
]
