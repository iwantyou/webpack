import "../src/common/css/common.css";
import React from "react";
import RenderDOM from "react-dom";
import Index from './router'
import { message } from 'antd'
message.config({
  top: '30vh',
  duration: 1
})

function render() {
  RenderDOM.render(<Index />, document.querySelector("#app"));
}
render();

if (module.hot) {
  module.hot.accept("./router.jsx", () => {
    render();
  });
}
