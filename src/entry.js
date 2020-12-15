import "react-hot-loader/patch";

import "./common/css/common.css";
import React from "react";
import RenderDOM from "react-dom";
import Index from "./router";
import { message } from "antd";
import { Provider } from "react-redux";
import store from "./store/index";
let context = React.createContext();
export { context };
message.config({
  top: "30vh",
  duration: 1,
});
class App extends React.Component {
  render() {
    console.log("store1", store);
    return (
      <Provider store={store}>
        <context.Provider value={store}>
          <Index />
        </context.Provider>
      </Provider>
    );
  }
}
function render() {
  RenderDOM.render(<App />, document.querySelector("#app"));
}
render();
