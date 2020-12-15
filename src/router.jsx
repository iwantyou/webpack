import { hot } from "react-hot-loader/root"
import React from "react"
import Errorboundary from  'component/errorboundary'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    withRouter
} from "react-router-dom"
import Layout from "./page/layout"
import { Login } from "./page/login"
import { connect } from "react-redux"

const mapStateProps = state => ({
    isLogin: state.isLogin
})

class Index extends React.Component {

    render() {
        return (
            <Errorboundary>
            <Router>
                <App>
                <Switch>
                    <>
                        <Redirect from='/' to='/layout' />
                        <Route path='/layout' render={props => <Layout {...props} />} />
                        <Route path='/login' exact component={Login} />
                    </>
                </Switch>
                </App>
            </Router>
            </Errorboundary>
        )
    }
}
@connect(mapStateProps)
class AppContainer extends React.Component{
    componentDidMount() {
        const { location, isLogin, history } = this.props
        if (!isLogin && location.pathname === '/layout/rule') {
            console.log(history)
        }
    }
    componentDidUpdate() {
        const { location, isLogin, history } = this.props
        console.log('update', location)
        if (!isLogin && location.pathname === '/layout/rule') {
            console.log(111, history)
            history.replace({
                pathname: '/login',
                state:{
                    path: location.pathname
                }
            })
        }
    }
    render(){
        return this.props.children
    }
}
var App = withRouter(AppContainer)
export default hot(Index)
