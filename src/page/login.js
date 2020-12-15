import React, { useState, useEffect, Component } from "react";
import { Button, message } from "antd";
import { Toast } from "component/toast";
import classnames from "classnames";
import { connect } from "react-redux";
import { login } from "action/action";
import { useStore } from "../hooks";
import "./login.less";
function unmont(target) {
  let next = target.prototype.componentWillUnmount || function () {};
  target.prototype.componentWillUnmount = function () {
    if (next) next.call(this, ...arguments);
    this._unmount = true;
    console.log("unmont", "123");
  };
  let setState = target.prototype.setState;
  target.prototype.setState = function () {
    if (this._unmount) return;
    setState.call(this, ...arguments);
  };
}
let i = 0
function Test() {
  function add(a, b) {
    // console.log("执行");
    return a + b;
  }
  const store = useStore()
  // console.log('store', store)
  add(1, 2);
  let time;
  useEffect(() => {
    time = 2;
    console.log('909090909')
  }, []);
  let [count, setCount] =  useState([])

  console.log("----count----", count)
  const [name, setName] = useState({ a: 1 });
  return (
    <div>
      <div>{name.a}</div>
      <div onClick={() => setName((name) => ({ a: name.a + 1 }))}>{name.a}</div>
    </div>
  );
}
@connect((state) => { console.log('state,islogin', state);return ({ isLogin: state.a.isLogin })}, { login })
@unmont
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "123",
      password: "",
    };
  }
  static getDerivedStateFromProps(props, state) {
    return state;
  }
  login = () => {
    const { login, location, history } = this.props;
    return history.push(location.state.path)
    const { user, password } = this.state;
    if (!user || !password) return Toast("请输入完整内容", 2000);
    if (user === "123456" && password == "123456") {
      // history.replace({
      //   pathname: location.state.path,
      //   search: location.search,
      //   hash: location.hash,
      // });
      history.push(location.state.path)
      // return login();
    }
    return Toast("密码错误", 2000);
  };
  render() {
    let { password, user } = this.state;
    return (
      <div className={classnames("login")}>
        <div className={classnames("content")}>
          <div
            style={{
              textAlign: "center",
              fontSize: "26px",
              color: "#000",
              paddingTop: "25px",
            }}
          >
            登陆666
          </div>
          <Test />
          <div className={classnames("form")}>
            <div style={{ padding: "20px 30px" }}>
              <input
                type="text"
                placeholder="123456"
                value={user}
                onChange={(e) => {
                  this.setState({
                    user: e.target.value,
                  });
                }}
              />
            </div>
            <div style={{ padding: "20px 30px" }}>
              <input
                type="text"
                placeholder="123456"
                value={password}
                onChange={(e) => {
                  this.setState({
                    password: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <Button
            className="btn"
            size="large"
            type="primary"
            shape="round"
            onClick={this.login}
          >
            登陆
          </Button>
        </div>
      </div>
    );
  }
}
export { Login };
