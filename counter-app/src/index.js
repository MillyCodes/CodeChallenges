// left of 2:06 https://www.youtube.com/watch?v=Ke90Tje7VS0

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
