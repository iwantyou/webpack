import AsyncComponent from 'component/asyncCompont/index'

const Web = AsyncComponent(() => import('../page/web'))

const User = AsyncComponent(() => import('../page/user'))

const Rule = AsyncComponent(() => import('../page/rule'))

const Web1 = AsyncComponent(() => import('../page/web1'))

export const routes = [
  {
    name: '主页',
    path: "/layout/web",
    exact: true,
    requireAuth: true,
    icon: 'icon-zhuye',
    children: [{
        name: '主页1',
        path: "/layout/web",
        exact: true,
        requireAuth: false,
        component: Web
    },
    {
        name: '主页2',
        path: "/layout/web/1",
        exact: true,
        requireAuth: false,
        component: Web1
    }
]
  },
  {
    name: '规则',
    path: "/layout/rule",
    icon: "icon-guize",
    exact: true,
    requireAuth: true,
    component: Rule
  },
  {
    name: '用户',
    path: "/layout/user/:id",
    icon: "icon-yonghu",
    exact: true,
    requireAuth: false,
    component: User
  }
];
