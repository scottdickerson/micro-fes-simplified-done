import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import ReactQueryProvider from "growlers/ReactQueryProvider";
import ReactQueryData from "./components/ReactQueryData";

const App = () => (
  <ReactQueryProvider>
    <ReactQueryData />
  </ReactQueryProvider>
);

ReactDOM.render(<App />, document.getElementById("app"));
