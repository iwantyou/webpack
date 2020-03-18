import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import { routes } from "./router/router";
import Layout from "./page/layout";
function Routercomponent(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => {
        return <route.component {...props} />;
      }}
    ></Route>
  );
}
const Index = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <>
            {routes.map((route, i) => {
              return <Routercomponent {...route} key={i} />;
            })}
          </>
        </Switch>
      </Layout>
    </Router>
  );
};

export default Index;
