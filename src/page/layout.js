import React from "react";
import { routes } from "../router/router";
import { Link } from "react-router-dom";
import "./layout.less";
class Layout extends React.Component {
  state = {
    name: "duzibo",
    toggle: false
  };
  toggle = () => {
    this.setState(state => ({ toggle: !state.toggle }));
  };
  render() {
    return (
      <div className="main">
        <div className="header">头部100%</div>
        <div className="left">
          <ul>
            {routes.map((route, i) => {
              return (
                <li key={i}>
                  <i className={route.icon}></i>
                  {route.children ? (
                    <div onClick={this.toggle}>{route.path}</div>
                  ) : (
                    <Link to={route.path}>{route.path}</Link>
                  )}
                  {route.children &&
                    route.children.map((child, i) => {
                      return (
                        <div
                          className={`child child${i} ${!this.state.toggle &&
                            "hidden"}`}
                          key={i}
                        >
                          <Link to={child.path}>{child.path}</Link>
                        </div>
                      );
                    })}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right">{this.props.children}</div>
      </div>
    );
  }
}
export default Layout;
