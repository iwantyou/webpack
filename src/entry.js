import "../src/common/css/common.css";
import React from "react";
import RenderDOM from "react-dom";
import Index from './router'
// import Index from './page/layout'
// import Add from './page/a'

function render() {
  RenderDOM.render(<Index />, document.querySelector("#app"));
}
render();

if (module.hot) {
  module.hot.accept("./router.jsx", () => {
    render();
  });
}
