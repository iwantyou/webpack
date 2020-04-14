import React, { useState, useEffect, useRef, useMemo } from "react"
import { Link } from "react-router-dom"
import { Menu, Button } from "antd"
import { Icon } from "component/icon/icon"
import classnames from "classnames"
import "./sidelayout.less"
const { SubMenu, Item } = Menu
export default function SideLayout(props) {
    const [collapsed, setCollapsed] = useState(true)
    // const [slecteKeys ] = useState(["/layout/web"])
    const [ defaultopenKeys ] = useState(["sub1"])
    const [ iscollapsedBtn ] = useState(false)
    const [selectedKeys, setSelectedKeys] = useState(["/layout/web"])
    const { location } = props

    const tab = useRef(null)
    tab.current = [
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
    const toggleCollapse = () => {
        setCollapsed((val) => !val)
    }
    const deepItem = (route, isChild = false) => {
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
                    {route.children.map((child) => deepItem(child, true))}
                </SubMenu>
            )
        }
        return (
            <Item key={route.path}>
                {!isChild && <Icon className={classnames(`${route.icon}`)} />}
                <Link to={route.path}>{route.name}</Link>
            </Item>
        )
    }

    useEffect(() => {
        setSelectedKeys([location.pathname])
    }, [location])

    return (
        <div className={classnames("sidelayout")}>
            {iscollapsedBtn && (
                <Button
                    type='primary'
                    onClick={toggleCollapse}
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
                // defaultSelectedKeys={slecteKeys}
                defaultOpenKeys={defaultopenKeys}
                selectedKeys={selectedKeys}
                mode='inline'
                theme='dark'
                inlineCollapsed={!collapsed}
                // onSelect={onSelect}
            >
                {tab.current.map((route) => deepItem(route))}
            </Menu>
        </div>
    )
}
