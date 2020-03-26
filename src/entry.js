import "react-hot-loader/patch";

import "../src/common/css/common.css";
import React from "react";
import RenderDOM from "react-dom";
import Index from "./router";
import { message } from "antd";
message.config({
  top: "30vh",
  duration: 1
});
console.log(process.env.NODE_ENV, 99999, TYPE);
function render() {
  RenderDOM.render(<Index />, document.querySelector("#app"));
}
render();
