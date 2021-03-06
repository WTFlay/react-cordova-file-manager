import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function renderReactDom() {
  ReactDOM.render(<App />, document.getElementById("root"));
}

if (window.cordova) {
  document.addEventListener("deviceready", renderReactDom, false);
} else {
  renderReactDom();
}