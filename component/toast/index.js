import React from "react";
import RenderDom from "react-dom";
import './index.less'

const Toast = (text = "", duration = 800, cb = () => {}) => {
  if (typeof duration == "function") {
    cb = duration;
    duration = 800;
  }
  let timer = null
  let div = document.createElement("div");
  document.body.appendChild(div);

  const Layout = () => <div className="v_toast">{text}</div>;
  RenderDom.render(<Layout />, div);


 timer = setTimeout(() => {
    div.classList.add("v_hidden");
    div.parentNode.removeChild(div);
    cb()
    clearTimeout(timer)
  }, duration);
};
export { Toast }