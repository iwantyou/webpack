import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { routes } from "./router/router";
import Layout from "./page/layout";
function Routercomponent(route) {
  let dom1 = null;
  let dom2 = null;
  if (route.children) {
    dom1 = (
      <div className="mulu">
        {route.children.map((child, i) => {
          return <Routercomponent {...child} key={i} />;
        })}
      </div>
    );
  } else {
    dom2 = (
      <Route
        path={route.path}
        exact={route.exact}
        render={props => {
          if (route.requireAuth) {
            return <div>你还没登陆哦</div>;
          }
          return <route.component {...props} />;
        }}
      ></Route>
    );
  }

  let dom = route.children ? dom1 : dom2;
  return dom;
}
const Index = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <>
            {/* <Redirect from="/" to="web" /> */}
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
