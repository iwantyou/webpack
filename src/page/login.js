import React, { useState, useRef } from "react"
import { Button } from "antd"
import { Toast } from "component/toast/index"
import classnames from "classnames"
import { connect } from "react-redux"
import { login } from "action/action"
import { useLocation, useHistory } from 'react-router-dom'
import Transition  from 'component/transitions/index'
import "./login.less"

function Login(props) {
    const [user, setUser] = useState("123")
    const [password, setPassword] = useState("")
    const [ show, setShow ] = useState(true)
    const location = useLocation()
    const history = useHistory()
    const login = () => {
        const { login } = props
        if (!user || !password) return Toast("请输入完整内容", 2000)
        if (user === "123456" && password == "123456") {
            history.replace({
                pathname: location.state.path,
                search: location.search,
                hash: location.hash,
            })
            return login()
        }
        return Toast("密码错误", 2000)
    }
    return (
        <div className={classnames("login")}>
            <div className={classnames("content")}>
                <Transition 
                    transitionName="test" 
                    visiable={show} 
                    appearEnteractive={3000}
                    appearEnd={1000}
                    onEnterActive={3000}
                    onEnterEnd={1000}
                    onLeaveActive={400}
                    onLeaveEnd={500}
                    >
                   <div>哈哈哈哈</div>
                </Transition>
            <div>
                <button onClick={() => {setShow((state) => !state)}}>button</button>
            </div>
                <div
                    style={{
                        textAlign: "center",
                        fontSize: "26px",
                        color: "#000",
                        paddingTop: "25px",
                    }}
                >
                    登陆
                </div>
                <div className={classnames("form")}>
                    <div style={{ padding: "20px 30px" }}>
                        <input
                            type='text'
                            placeholder='123456'
                            value={user}
                            onChange={(e) => {
                                setUser(e.target.value)
                            }}
                        />
                    </div>
                    <div style={{ padding: "20px 30px" }}>
                        <input
                            type='text'
                            placeholder='123456'
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                    </div>
                </div>
                <Button
                    className='btn'
                    size='large'
                    type='primary'
                    shape='round'
                    onClick={login}
                >
                    登陆
                </Button>
            </div>
        </div>
    )
}
export default connect((state) => ({ isLogin: state.isLogin }), { login })(Login)
