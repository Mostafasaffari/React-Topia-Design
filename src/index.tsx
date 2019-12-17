import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./redux/store";

import Router from "./Router";

import "antd/dist/antd.css";

const Index: React.FC = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));


