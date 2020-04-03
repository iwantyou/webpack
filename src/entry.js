import "react-hot-loader/patch";

import "../src/common/css/common.css";
import React from "react";
import RenderDOM from "react-dom";
import Index from "./router";
import { message } from "antd";
import { Provider } from "react-redux"
import store from "./store/index"
message.config({
  top: "30vh",
  duration: 1
});
console.log(process.env.NODE_ENV, 99999, TYPE);
function render() {
  RenderDOM.render(<Provider store={store} ><Index /></Provider>, document.querySelector("#app"));
}
render();
