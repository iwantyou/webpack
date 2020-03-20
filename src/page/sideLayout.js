import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../router/router";
import { Menu, Button } from "antd";
import { Icon } from "component/icon/icon";
import classnames from "classnames";
import "./sidelayout.less";
const { SubMenu, Item } = Menu;
export default class SideLayout extends React.Component {
  state = {
    collapsed: true,
    slecteKeys: [],
    openKeys: [],
    iscollapsedBtn: false
  };
  toggleCollapse = () => {
    this.setState(state => ({
      collapsed: !state.collapsed
    }));
  };
  deepItem = (route, isChild = false) => {
    if (route.children) {
      return (
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon className={`${route.icon}`} />
              <span>{route.name}</span>
            </span>
          }
        >
          {route.children.map(child => this.deepItem(child, true))}
        </SubMenu>
      );
    }
    return (
      <Item key={route.path}>
        {!isChild && <Icon className={classnames(`${route.icon}`)} />}
        <Link to={route.path}>{route.name}</Link>
      </Item>
    );
  };
  render() {
    const { collapsed, slecteKeys, openKeys, iscollapsedBtn } = this.state;
    return (
      <div className={classnames("sidelayout")}>
        {iscollapsedBtn && (
          <Button
            type="primary"
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
          defaultOpenKeys={openKeys}
          mode="inline"
          theme="dark"
          inlineCollapsed={!collapsed}
        >
          {routes.map(route => this.deepItem(route))}
        </Menu>
      </div>
    );
  }
}
