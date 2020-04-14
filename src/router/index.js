import { Route, Redirect } from "react-router-dom"
import React, { Fragment } from 'react'

const RenderRoutes = (routes) => {
   let dom =  routes && (
        <Fragment>
            {routes.map((route, i) => (
                <Route
                    path={route.path}
                    exact={route.exact}
                    key={i}
                    strict={route.strict}
                    render={(props) => (
                        <route.component {...props} routes={route.routes} />
                    )}
                ></Route>
            ))}
        </Fragment>
    )
   return dom
}

export default RenderRoutes