import { hot } from "react-hot-loader/root"
import React from "react"
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

const mapStateProps = (state) => ({
    isLogin: state.isLogin,
})

class Index extends React.Component {
    render() {
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
}
@connect(mapStateProps)
class AppContainer extends React.Component {
    componentDidUpdate() {
        const { location, isLogin, history } = this.props

        if (!isLogin && location.pathname === "/layout/rule") {
            history.replace({
                pathname: "/login",
                state: {
                    path: location.pathname,
                },
            })
        }
    }
    render() {
        return this.props.children
    }
}
var App = withRouter(AppContainer)
export default hot(Index)
