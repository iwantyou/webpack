import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../router/router";
import { Menu, Button } from "antd";
import { Icon } from "component/icon/icon";
import classnames from "classnames";
import "./sidelayout.less";
import './test'
const { SubMenu, Item } = Menu;
export default class SideLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      slecteKeys: [],
      openKeys: [],
      defaultopenKeys: [],
      iscollapsedBtn: false
    }; 
  }
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
        <Link to={route.path === '/layout/user/:id' ? '/layout/user/01' : route.path}>{route.name}</Link>
      </Item>
    );
  };
  componentDidUpdate(){
    console.log('nextProps', this.props)
  }
  render() {
    const { collapsed, slecteKeys, openKeys, iscollapsedBtn, defaultopenKeys } = this.state;
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
          defaultOpenKeys={defaultopenKeys}
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
