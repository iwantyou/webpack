import { Route, Redirect } from "react-router-dom"
import React, { Fragment } from "react"

const RenderRoutes = (routes, redirect = null) => {
    let dom = routes && (
        <Fragment>
            {redirect && (
                <Route exact path={redirect.from}>
                    <Redirect to={redirect.to} />
                </Route>
            )}
            {routes.map((route, i) => (
                <Route
                    path={route.path}
                    exact={route.exact}
                    key={i}
                    strict={route.strict}
                    render={(props) => (
                        <route.component {...props} routes={route.routes} redirect={route.redirect} />
                    )}
                ></Route>
            ))}
        </Fragment>
    )
    return dom
}

export default RenderRoutes
