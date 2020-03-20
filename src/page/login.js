import React, { useState } from "react";
import { Button, message } from "antd";
import { Toast } from 'component/toast/index'
import classnames from "classnames";
import "./login.less";
const Login = props => {
  const { state = {} } = props.location;
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    if (!user || !password) return Toast("请输入完整内容", 2000);
    if (user === "123456" && password == "123456") {
      return props.history.push({
        // pathname: state.from || "/"
        pathname: "/layout"
      });
    }
    return Toast("密码错误", 2000);
  };
  return (
    <div className={classnames("login")}>
      <div className={classnames("content")}>
        <div style={{ textAlign: "center", fontSize: "26px", color: "#000", paddingTop:"25px" }}>
          登陆
        </div>
        <div className={classnames("form")}>
          <div style={{ padding: "20px 30px"}}>
          {/* <label htmlFor="user">user:</label> */}
            <input
              type="text"
              placeholder="123456"
              value={user}
              onChange={e => {
                setUser(e.target.value);
              }}
            />
          </div>
          <div style={{ padding: "20px 30px"}}>
          {/* <label htmlFor="password">password:</label> */}
            <input
              type="text"
              placeholder="123456"
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <Button
          className="btn"
          size="large"
          type="primary"
          shape="round"
          onClick={login}
        >
          登陆
        </Button>
      </div>
    </div>
  );
};
export { Login };
