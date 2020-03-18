import Web from '../page/web'
import User from '../page/user'
import Rule from '../page/rule'
import Web1 from '../page/web1'

export const routes = [
  {
    path: "/web",
    icon: "",
    exact: true,
    requireAuth: true,
    component: Web,
    children: [{
        path: "/web/1",
        exact: true,
        component: Web1
    }]
  },
  {
    path: "/rule",
    icon: "",
    exact: true,
    requireAuth: true,
    component: Rule
  },
  {
    path: "/user/:id",
    icon: "",
    exact: true,
    requireAuth: true,
    component: User
  }
];
