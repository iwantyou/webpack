import React from "react"
import { Link } from "react-router-dom"
import { routes } from "../router/router"
import { Menu, Button } from "antd"
import { Icon } from "component/icon/icon"
import classnames from "classnames"
import "./sidelayout.less"
const { SubMenu, Item } = Menu
export default class SideLayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: true,
            slecteKeys: [],
            openKeys: [],
            defaultopenKeys: [],
            iscollapsedBtn: false,
        }
    }
    tab = [
        {
            name: "主页",
            icon: "icon-zhuye",
            children: [
                {
                    path: "/layout/web",
                    name: "主页1",
                },
                {
                    path: "/layout/web1",
                    name: "主页2",
                },
            ],
        },
        {
            name: "规则",
            path: "/layout/rule",
            icon: "icon-guize",
        },
        {
            path: "/layout/user/duzibo",
            name: "用户",
            icon: "icon-yonghu",
        },
    ]
    toggleCollapse = () => {
        this.setState((state) => ({
            collapsed: !state.collapsed,
        }))
    }
    deepItem = (route, isChild = false) => {
        if (route.children) {
            return (
                <SubMenu
                    key='sub1'
                    title={
                        <span>
                            <Icon className={`${route.icon}`} />
                            <span>{route.name}</span>
                        </span>
                    }
                >
                    {route.children.map((child) => this.deepItem(child, true))}
                </SubMenu>
            )
        }
        return (
            <Item key={route.path}>
                {!isChild && <Icon className={classnames(`${route.icon}`)} />}
                <Link
                    to={ route.path}
                >
                    {route.name}
                </Link>
            </Item>
        )
    }
    componentDidUpdate() {
        console.log("nextProps", this.props)
    }
    render() {
        const {
            collapsed,
            slecteKeys,
            openKeys,
            iscollapsedBtn,
            defaultopenKeys,
        } = this.state
        return (
            <div className={classnames("sidelayout")}>
                {iscollapsedBtn && (
                    <Button
                        type='primary'
                        onClick={this.toggleCollapse}
                        style={{ marginBottom: 15 }}
                    >
                        <Icon
                            className={classnames(
                                `${collapsed ? "icon-icons_flod" : "icon-icons_unflod"}`
                            )}
                        ></Icon>
                    </Button>
                )}
                <Menu
                    className={classnames("SideLayout")}
                    defaultSelectedKeys={slecteKeys}
                    defaultOpenKeys={defaultopenKeys}
                    mode='inline'
                    theme='dark'
                    inlineCollapsed={!collapsed}
                >
                    {this.tab.map((route) => this.deepItem(route))}
                </Menu>
            </div>
        )
    }
}
