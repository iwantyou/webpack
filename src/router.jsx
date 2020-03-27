import { hot } from "react-hot-loader/root";
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
import Layout from "./page/layout";
import { Login } from "./page/login";

const Index = () => {
  return (
    <Router>
      <Switch>
        <>
          <Auth />
          <Redirect from="/" to="/layout" />
          <Route path="/layout" render={props => <Layout {...props} />} />
          <Route path="/login" exact component={Login} />
        </>
      </Switch>
    </Router>
  );
};
//
// 路由拦截
const Auth = withRouter(props => {
  console.log(props, 111);
  const { location } = props;
  if (location.pathname == "/layout/rule") {
    return (
      <Redirect
        to={{ pathname: "/login", state: { from: location.pathname } }}
      />
    );
  }
  return null;
});
export default hot(Index);
