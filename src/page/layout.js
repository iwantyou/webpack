import React from "react";
import Router from "../router";
import { routes } from "../router/router"
import { Link } from 'react-router-dom'
import './layout.less'
class Layout extends React.Component {
  state = {
    name: "duzibo"
  };
  render() {

    return (
      <div className="main">
        <div className="header">头部100%</div>
        <div className="left">
          <ul>
            {routes.map((route, i) => {
              return <li key={i}><i className={route.icon} ></i><Link to={route.path}>{route.path}</Link></li>;
            })}
          </ul>
        </div>
        <div className="right">
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default Layout
