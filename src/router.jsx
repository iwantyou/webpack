import { hot } from "react-hot-loader/root"
import React, { useEffect } from "react"
import Errorboundary from "component/errorboundary/index"
import RenderRoutes from "./router/index"
import { routes } from "./router/router"
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    withRouter,
    Route
} from "react-router-dom"
import { connect } from "react-redux"


function Index () {
        return (
            <Errorboundary>
                <Router>
                    <App>
                        <Switch>
                            <Route exact path="/">
                                 <Redirect from = '/' to="/layout" /> 
                            </Route>
                            {RenderRoutes(routes)}
                        </Switch>
                    </App>
                </Router>
            </Errorboundary>
        )
    }
function AppContainer(props) {
  
    useEffect(() => {
        const { location, isLogin, history } = props

        if (!isLogin && location.pathname === "/layout/rule") {
            history.replace({
                pathname: "/login",
                state: {
                    path: location.pathname,
                },
            })
        }
    })

   return props.children
}

const mapStateProps = (state) => ({
    isLogin: state.isLogin,
})

var App = withRouter(connect(mapStateProps)(AppContainer))
export default hot(Index)
